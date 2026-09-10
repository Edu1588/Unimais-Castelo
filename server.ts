import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import https from "https";
import helmet from "helmet";
import cors from "cors";
import rateLimit from "express-rate-limit";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Security Middlewares
  app.use(helmet({
    contentSecurityPolicy: false, // Disabled for development/vite
    crossOriginEmbedderPolicy: false // Allows loading external images like cloudinary
  }));

  app.use(cors({
    origin: '*', // Adjust this to your specific domain in production
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
  }));

  // Rate Limiting (Bot protection)
  const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 200, // Limit each IP to 200 requests per windowMs
    message: "Too many requests from this IP, please try again later."
  });
  app.use(limiter);

  // Simple proxy middleware for Unimais API
  app.use("/api/unimais", (req, res) => {
    const url = `https://unimaisveiculos.com.br${req.url}`;
    const proxyReq = https.request(
      url,
      {
        method: req.method,
        headers: {
          ...req.headers,
          host: "unimaisveiculos.com.br", // override host
        },
      },
      (proxyRes) => {
        res.writeHead(proxyRes.statusCode || 200, proxyRes.headers);
        proxyRes.pipe(res, { end: true });
      }
    );

    req.pipe(proxyReq, { end: true });
    proxyReq.on("error", (err) => {
      console.error(err);
      res.status(500).send("Proxy error");
    });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    // For Express 4
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
