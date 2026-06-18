// File: api/gemini.js
// Phiên bản Tối ưu hóa cho Free Tier - Phòng chống lỗi 429 & Nghẽn mạng

// Hàm trì hoãn (Delay) phục vụ cho cơ chế Retry (Exponential Backoff)
const delay = (ms) => new Promise((resolve) => resolve(ms));

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Chỉ hỗ trợ phương thức POST' });
  }

  try {
    const { action, payload } = req.body;

    if (!action || !payload || !payload.contents) {
      return res.status(400).json({ error: 'Dữ liệu payload không hợp lệ.' });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ error: 'Hệ thống chưa cấu hình API KEY.' });
    }

    // 1. CHIẾN LƯỢC CHỌN MODEL CHO BẢN MIỄN PHÍ
    // Ưu tiên dùng Flash làm lõi vì Free Tier của Flash có RPM (Lượt gọi/phút) cao nhất.
    let primaryModel = 'gemini-2.5-flash';
    let backupModel = 'gemini-2.5-flash-lite'; 

    if (action === 'extract') {
      primaryModel = 'gemini-2.5-flash-lite';
      backupModel = 'gemini-2.5-flash'; // Đảo ngược nếu bản Lite lỗi
    } else if (action === 'reason') {
      // Nếu là tác vụ Biện luận, cố gắng dùng bản Pro, nhưng chuẩn bị sẵn tinh thần "Fallback" sang Flash
      primaryModel = 'gemini-2.5-pro';
      backupModel = 'gemini-2.5-flash'; 
    }

    // 2. GỬI REQUEST VỚI CƠ CHẾ PHÒNG THỦ (RETRY + FALLBACK)
    let response;
    let data;
    let currentModel = primaryModel;
    let maxRetries = 2; // Thử lại tối đa 2 lần nếu bị lỗi 429 hoặc 503

    for (let attempt = 0; attempt <= maxRetries; attempt++) {
      try {
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${currentModel}:generateContent`;
        
        response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-goog-api-key': apiKey
          },
          body: JSON.stringify(payload)
        });

        data = await response.json();

        // Nếu thành công -> thoát vòng lặp ngay
        if (response.ok) break;

        // Nếu gặp lỗi 429 (Hết lượt gọi) hoặc 503 (Server miễn phí quá tải)
        if (response.status === 429 || response.status === 503) {
          console.warn(`⚠️ Model ${currentModel} bị từ chối (Status: ${response.status}). Đang xử lý...`);
          
          if (attempt < maxRetries) {
            // Bước 1: Đợi một chút tăng dần thời gian (đợi 2s rồi tới 4s) để tránh spam
            await delay(2000 * (attempt + 1));
            
            // Bước 2: Hạ cấp sang Model dự phòng (Backup) nếu model chính (như bản Pro) bị nghẽn
            if (currentModel !== backupModel) {
              console.log(`🔄 Chuyển hướng hạ cấp từ [${currentModel}] sang [${backupModel}] để cứu vãn request.`);
              currentModel = backupModel;
            }
            continue; // Thử lại vòng lặp
          }
        }
        
        // Nếu là lỗi khác (ví dụ: 400 sai cú pháp) -> trả lỗi luôn không cần thử lại
        break;

      } catch (fetchError) {
        console.error(`🚨 Lỗi kết nối mạng ở lượt thử ${attempt}:`, fetchError);
        if (attempt === maxRetries) throw fetchError;
        await delay(2000);
      }
    }

    // 3. TRẢ KẾT QUẢ VỀ GIAO DIỆN
    if (!response.ok) {
      return res.status(response.status).json({
        error: data.error?.message || `Tài khoản Miễn phí đang quá tải (Model: ${currentModel}). Vui lòng thử lại sau.`
      });
    }

    return res.status(200).json(data);

  } catch (error) {
    console.error("🚨 Lỗi Hệ thống Serverless:", error);
    return res.status(500).json({ error: 'Lỗi hệ thống Vercel hoặc mạng kết nối AI.' });
  }
}