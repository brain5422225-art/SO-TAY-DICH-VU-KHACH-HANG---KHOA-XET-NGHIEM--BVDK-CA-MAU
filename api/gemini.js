// File: api/gemini.js
// TUYỆT ĐỐI KHÔNG DÙNG THƯ VIỆN @google/generative-ai Ở ĐÂY. CHỈ DÙNG FETCH THUẦN.

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Chỉ hỗ trợ phương thức POST' });
  }

  try {
    const { action, payload } = req.body;
    
    // 1. MÁY SIÊU ÂM TÌM API KEY
    const apiKey = process.env.GEMINI_API_KEY; 
    
    if (!apiKey || apiKey === 'undefined' || apiKey.trim() === '') {
      console.error("🚨 LỖI NGHIÊM TRỌNG: Không tìm thấy GEMINI_API_KEY trong hệ thống!");
      return res.status(500).json({ 
        error: 'MÁY CHỦ THIẾU API KEY. Vui lòng kiểm tra lại file .env, Vercel Variables hoặc thẻ Secrets của AI Studio.' 
      });
    }

    // 2. SỬ DỤNG MODEL 2.5 TỐI TÂN NHẤT
    let apiUrl = '';
    if (action === 'extract') {
      // 2.5 Flash Lite: Cực nhanh để đọc nhiều trang PDF
      apiUrl = `https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash-lite:generateContent?key=${apiKey}`;
    } else if (action === 'analyze' || action === 'reason') {
      // 2.5 Flash: Đủ sâu sắc để đóng vai Hội đồng Y khoa
      apiUrl = `https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=${apiKey}`;
    } else {
      return res.status(400).json({ error: 'Hành động không hợp lệ' });
    }

    // 3. GỬI REQUEST LÊN GOOGLE
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("🚨 GOOGLE API ERROR:", data);
      return res.status(response.status).json({ error: data.error?.message || 'Lỗi từ Google AI' });
    }

    // Trả kết quả về cho Frontend
    res.status(200).json(data);
    
  } catch (error) {
    console.error("🚨 Lỗi Serverless Nội bộ:", error);
    res.status(500).json({ error: 'Lỗi hệ thống máy chủ trung gian' });
  }
}