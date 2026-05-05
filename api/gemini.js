export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Chỉ hỗ trợ phương thức POST' });
  }

  try {
    const { action, payload } = req.body;
    const apiKey = process.env.GEMINI_API_KEY; 

    if (!apiKey) {
      return res.status(500).json({ error: 'Máy chủ chưa được cấu hình API Key' });
    }

    let apiUrl = '';
    if (action === 'extract') {
      // Đọc ảnh siêu tốc bằng 2.5 Flash-Lite (Miễn phí 15 lượt/phút)
      apiUrl = `https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash-lite:generateContent?key=${apiKey}`;
    } else if (action === 'analyze') {
      // Phân tích bệnh học sâu sắc bằng 2.5 Flash (Miễn phí 10 lượt/phút)
      apiUrl = `https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=${apiKey}`;
    } else {
      return res.status(400).json({ error: 'Hành động không hợp lệ' });
    }

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({ error: data.error?.message || 'Lỗi từ Google AI' });
    }

    res.status(200).json(data);
  } catch (error) {
    console.error("Lỗi Serverless:", error);
    res.status(500).json({ error: 'Lỗi hệ thống máy chủ nội bộ' });
  }
}