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
    origin: "http://localhost:5173", // Correct syntax
    credentials: true,
  })
);
app.use("/api", Routes);








const PORT = process.env.PORT || 3000;
server.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});


