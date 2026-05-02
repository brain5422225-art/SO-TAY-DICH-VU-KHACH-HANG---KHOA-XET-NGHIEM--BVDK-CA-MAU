// File: api/gemini.js
// Đây là máy chủ trung gian. File này chạy ngầm trên Vercel, không lộ ra ngoài web.

export default async function handler(req, res) {
  // Chỉ chấp nhận yêu cầu gửi dữ liệu (POST)
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Chỉ chấp nhận phương thức POST' });
  }

  try {
    const { action, payload } = req.body;
    
    // Lấy API Key từ "Két sắt" của Vercel
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      throw new Error("Không tìm thấy API Key trên máy chủ!");
    }

    // Xác định đang gọi AI nào dựa vào action của Frontend
    let apiUrl = '';
    if (action === 'extract') {
      // Dùng 1.5 Flash cho việc đọc ảnh
      apiUrl = `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${apiKey}`;
    } else if (action === 'analyze') {
      // Dùng 1.5 Pro cho việc phân tích y khoa chuyên sâu
      apiUrl = `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-pro:generateContent?key=${apiKey}`;
    } else {
      throw new Error("Hành động không hợp lệ.");
    }

    // Thay mặt web gửi yêu cầu lên Google
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.error?.message || 'Lỗi từ Google AI');
    }

    // Trả kết quả về cho điện thoại người dùng
    res.status(200).json(data);
    
  } catch (error) {
    console.error("Serverless Error:", error);
    res.status(500).json({ error: error.message });
  }
}
