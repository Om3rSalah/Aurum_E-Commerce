
import express from "express";
import cookieParser from "cookie-parser";
import productRoutes from "./routes/product.routes.js";
import authRoutes from "./routes/auth.routes.js";
import "dotenv/config";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";

const app = express();

// ES Modules: define __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(express.json({ limit: "10mb" }));

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

app.use(cookieParser());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/product", productRoutes);

// Production: serve Frontend
if (process.env.NODE_ENV === "production") {
  const frontendPath = path.join(__dirname, "../../Frontend/dist");

  app.use(express.static(frontendPath));

  app.get(/.*/, (_, res) => {
    res.sendFile(path.join(frontendPath, "index.html"));
  });
}

// PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server running on PORT: " + PORT);
});
