// File: api/gemini.js
// Trái tim của hệ thống: Phân luồng & Bảo mật API Key

export default async function handler(req, res) {
  // Chỉ chấp nhận phương thức POST bảo mật
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Chỉ hỗ trợ phương thức POST' });
  }

  try {
    const { action, payload } = req.body;
    
    // MÁY SIÊU ÂM TÌM API KEY
    const apiKey = process.env.GEMINI_API_KEY; 
    
    if (!apiKey || apiKey === 'undefined' || apiKey.trim() === '') {
      console.error("🚨 LỖI NGHIÊM TRỌNG: Không tìm thấy GEMINI_API_KEY trong hệ thống!");
      return res.status(500).json({ 
        error: 'MÁY CHỦ THIẾU API KEY. Vui lòng kiểm tra lại cấu hình biến môi trường.' 
      });
    }

    let apiUrl = '';

    // TẦN SỐ PHÂN LUỒNG MÔ HÌNH (SMART ROUTING)
    if (action === 'extract') {
      // Tần số 1: Dùng bản Flash Lite - Đọc ảnh/PDF siêu tốc (Tiết kiệm token, quét cực nhanh)
      apiUrl = `https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash-lite:generateContent?key=${apiKey}`;
    } else if (action === 'analyze' || action === 'predict') {
      // Tần số 2: Dùng bản Flash tiêu chuẩn - Tư duy sâu để Dự đoán chỉ định
      apiUrl = `https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=${apiKey}`;
    } else if (action === 'reason') {
      // Tần số 3: Dùng bản Flash tiêu chuẩn - Tư duy chuyên gia Đa chuyên khoa để Biện luận
      apiUrl = `https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=${apiKey}`;
    } else {
      return res.status(400).json({ error: 'Hành động không hợp lệ từ Giao diện.' });
    }

    // GỬI LỆNH LÊN GOOGLE AI
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("🚨 GOOGLE API ERROR:", data);
      return res.status(response.status).json({ error: data.error?.message || 'Lỗi từ Máy chủ Google AI' });
    }

    // Trả kết quả thành công về cho Giao diện
    res.status(200).json(data);
    
  } catch (error) {
    console.error("🚨 Lỗi Serverless Nội bộ:", error);
    res.status(500).json({ error: 'Lỗi hệ thống máy chủ trung gian Vercel.' });
  }
}