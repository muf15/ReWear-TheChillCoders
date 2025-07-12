import express from "express";

import dotenv from "dotenv";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

import cors from "cors";

import connectDB from "./db/database.js";
import Routes from "./routes/index.js";

const app = express();
dotenv.config();
connectDB();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.FRONTEND_BASEURL || "http://localhost:5173",
    credentials: true,
  })
);
app.use("/api/v1", Routes);








const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});


