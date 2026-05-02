import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import { GoogleGenerativeAI } from "@google/generative-ai";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json({ limit: '10mb' }));

  // API Route for Gemini Proxy (Vercel-style)
  app.post("/api/gemini", async (req, res) => {
    try {
      const { action, payload } = req.body;
      const apiKey = process.env.GEMINI_API_KEY?.trim();

      if (!apiKey) {
        console.error("[API Error] GEMINI_API_KEY is missing");
        return res.status(500).json({ error: "Chưa cấu hình GEMINI_API_KEY trên máy chủ. Vui lòng cài đặt trong Settings." });
      }

      const maskedKey = apiKey.length > 8 
        ? `${apiKey.substring(0, 4)}...${apiKey.substring(apiKey.length - 4)}`
        : "****";
      console.log(`[API] Proxying ${action} using key: ${maskedKey}`);

      const genAI = new GoogleGenerativeAI(apiKey);
      const modelName = action === 'extract' ? 'gemini-1.5-flash' : 'gemini-1.5-pro';
      const model = genAI.getGenerativeModel({ model: modelName });

      // The payload from client is already in the form { contents: [...] }
      const contents = payload.contents;
      
      const result = await model.generateContent({
        contents,
        generationConfig: payload.generationConfig
      });
      
      const response = await result.response;
      const text = response.text();

      // Return in a format compatible with how the client expects it (REST-like)
      res.status(200).json({
        candidates: [{
          content: {
            parts: [{ text }]
          }
        }]
      });
    } catch (error: any) {
      console.error("[API Error] SDK Error:", error);
      res.status(500).json({ error: error.message || "Lỗi khi xử lý yêu cầu AI" });
    }
  });

  // Health check route
  app.get("/api/health", (req, res) => {
    console.log("[API] Health check called");
    res.json({ status: "ok", env: process.env.NODE_ENV });
  });

  app.get("/api/test", (req, res) => {
    res.json({ message: "Server is alive" });
  });

  // Vite middleware for development
  const isProd = process.env.NODE_ENV === "production";
  
  if (!isProd) {
    console.log("[Server] Starting in DEVELOPMENT mode with Vite middleware");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    console.log("[Server] Starting in PRODUCTION mode");
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
