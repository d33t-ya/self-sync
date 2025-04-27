import express from 'express';  // Web Framework
import dotenv from 'dotenv';    // Environment Variables
import cookieParser from "cookie-parser";   // Extracts json data out of body
import cors from "cors";    // Cross-Origin Resource Sharing

import path from "path";    // Path Module

import { connectDB } from './lib/db.js';               // Database Connection
import authRoutes from './routes/auth.route.js';    // Routes
import { app, server } from './lib/socket.js';      // Socket.io

dotenv.config();

const PORT = process.env.PORT; 
const __dirname = path.resolve();    // Current Directory

app.use(express.json({ limit: "50mb"}));    // Middleware
app.use(cookieParser());    // Extracts json data out of body
app.use(cors( {
    origin: "http://localhost:5173",
    credentials: true,       // Allows cookies to be sent with req.
}));            

app.use("/api/auth", authRoutes);

// We'll set path to the static assets, under /frontend/dist
// folder that will be generated upon running `npm run build`.
// From there, we will get route and send the index.html file.
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/dist")));
  
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
    });
  }

server.listen(PORT, () => {
    console.log('Server is running on PORT: ' + PORT);
    connectDB();
});
