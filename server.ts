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

  // API Route for Gemini Proxy
  app.post("/api/gemini", async (req, res) => {
    console.log(`[API] Received request for ${req.body.action}`);
    try {
      const { action, payload, apiKey: clientApiKey } = req.body;
      const apiKey = clientApiKey || process.env.GEMINI_API_KEY;

      if (!apiKey) {
        console.error("[API] GEMINI_API_KEY is missing");
        return res.status(500).json({ error: "Chưa cấu hình API Key. Vui lòng kiểm tra Settings hoặc gửi key từ client." });
      }

      const genAI = new GoogleGenerativeAI(apiKey);
      const modelName = action === 'extract' ? 'gemini-1.5-flash' : 'gemini-1.5-pro';
      const model = genAI.getGenerativeModel({ model: modelName });

      // Convert request payload to SDK calls
      const contents = payload.contents;
      const result = await model.generateContent({
        contents,
        generationConfig: payload.generationConfig
      });
      const response = await result.response;
      const text = response.text();

      // Return in a format similar to what the client expects (REST API format)
      res.status(200).json({
        candidates: [{
          content: {
            parts: [{ text }]
          }
        }]
      });
    } catch (error: any) {
      console.error("[API] Server Proxy Error:", error);
      res.status(500).json({ error: error.message });
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
