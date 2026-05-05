// File: api/gemini.js
// Kiến trúc Tối hậu: Ma trận Quét ngang (Horizontal Scan) & Hạ cấp sâu (Deep Degradation)

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Chỉ hỗ trợ phương thức POST' });
  }

  try {
    const { action, payload } = req.body;

    // 1. KHO CHÌA KHÓA (Chứa 4 API Key của bạn)
    const apiKeys = [
      process.env.GEMINI_API_KEY_1 || process.env.GEMINI_API_KEY, 
      process.env.GEMINI_API_KEY_2,
      process.env.GEMINI_API_KEY_3,
      process.env.GEMINI_API_KEY_4
    ].filter(Boolean);

    if (apiKeys.length === 0) {
      return res.status(500).json({ error: 'LỖI HỆ THỐNG: KHÔNG TÌM THẤY API KEY NÀO.' });
    }

    // 2. MA TRẬN MÔ HÌNH (MODEL TIERS)
    // Máy chủ sẽ chạy theo thứ tự từ trên xuống dưới
    const modelTiers = [
      // Tầng 1: Thông minh nhất (Bản 2.5 tùy theo action)
      action === 'extract' ? 'gemini-2.5-flash-lite' : 'gemini-2.5-flash',
      // Tầng 2: Hạ cấp lần 1 (Bản 1.5 Flash - Tốc độ cao, chịu tải trâu bò)
      'gemini-1.5-flash',
      // Tầng 3: Hạ cấp lần 2 (Bản 1.5 Pro - Dự phòng cuối cùng trước khi đầu hàng)
      'gemini-1.5-pro'
    ];

    // 3. THUẬT TOÁN QUÉT NGANG & HẠ CẤP SÂU
    for (let tierIndex = 0; tierIndex < modelTiers.length; tierIndex++) {
      const currentModel = modelTiers[tierIndex];

      // Quét ngang qua 4 API Key cho Model hiện tại
      for (let keyIndex = 0; keyIndex < apiKeys.length; keyIndex++) {
        const currentKey = apiKeys[keyIndex];

        // Tự động nhận diện API endpoint (v1 cho bản 2.x, v1beta cho bản 1.x)
        const apiVersion = currentModel.startsWith('gemini-2') ? 'v1' : 'v1beta';
        const apiUrl = `https://generativelanguage.googleapis.com/${apiVersion}/models/${currentModel}:generateContent?key=${currentKey}`;

        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        const data = await response.json();

        // 🟢 THÀNH CÔNG: Trả kết quả về ngay, thoát mọi vòng lặp!
        if (response.ok) {
          console.log(`✅ Thành công: Model [${currentModel}] - Key số [${keyIndex + 1}]`);
          return res.status(200).json(data);
        }

        // 🟡 LỖI QUÁ TẢI (429) HOẶC NGHẼN SERVER (503): Lẳng lặng bỏ qua và thử Key/Model tiếp theo
        if (response.status === 429 || response.status === 503) {
          console.warn(`⚠️ Key ${keyIndex + 1} gặp lỗi ${response.status} cho model ${currentModel}. Đang chuyển hướng...`);
          continue; 
        }

        // 🔴 LỖI CÚ PHÁP/DỮ LIỆU TỪ LÂM SÀNG (400, v.v.): 
        // Lỗi này không phải do Quota, có thử Key khác cũng vậy. Báo lỗi thẳng về màn hình!
        console.error(`🚨 Lỗi Google API (${response.status}):`, data);
        return res.status(response.status).json({ error: data.error?.message || 'Lỗi từ Google AI' });
      }

      // Nếu đã quét sạch 4 Key mà vẫn bị lỗi 429 -> Kích hoạt Hạ Cấp Sâu!
      console.warn(`⬇️ Đã cạn kiệt 4 Key cho ${currentModel}. Lẳng lặng hạ cấp xuống ${modelTiers[tierIndex + 1] || 'Hết Model'}...`);
    }

    // 4. KIỆT QUỆ TOÀN BỘ (EDGE CASE)
    // Đã chạy qua 3 Model x 4 Key = 12 lần thử mà vẫn thất bại
    return res.status(429).json({ 
      error: 'Hệ thống Y khoa đang tiếp nhận lượng truy cập khổng lồ. Đã huy động toàn bộ ma trận máy chủ dự phòng nhưng không thành công. Vui lòng đợi 1 phút rồi thử lại.' 
    });

  } catch (error) {
    console.error("🚨 Lỗi Serverless Nội bộ:", error);
    res.status(500).json({ error: 'Lỗi hạ tầng đám mây Vercel.' });
  }
}