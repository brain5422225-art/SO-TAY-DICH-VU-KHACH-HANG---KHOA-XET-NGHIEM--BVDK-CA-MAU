import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function handler(req, res) {
  // Chỉ chấp nhận yêu cầu gửi dữ liệu (POST)
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Chỉ chấp nhận phương thức POST' });
  }

  try {
    const { action, payload } = req.body;
    
    // Lấy API Key từ "Két sắt" môi trường (Vercel Environment Variables)
    const apiKey = process.env.GEMINI_API_KEY?.trim();

    if (!apiKey) {
      return res.status(500).json({ error: "Không tìm thấy API Key trên máy chủ!" });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const modelName = action === 'extract' ? 'gemini-1.5-flash' : 'gemini-1.5-pro';
    const model = genAI.getGenerativeModel({ model: modelName });

    const result = await model.generateContent({
      contents: payload.contents,
      generationConfig: payload.generationConfig
    });
    
    const response = await result.response;
    const text = response.text();

    // Trả kết quả về cho Frontend theo định dạng REST tương thích
    res.status(200).json({
      candidates: [{
        content: {
          parts: [{ text }]
        }
      }]
    });
    
  } catch (error) {
    console.error("Vercel Serverless Error:", error);
    res.status(500).json({ error: error.message || "Lỗi khi xử lý yêu cầu AI" });
  }
}
