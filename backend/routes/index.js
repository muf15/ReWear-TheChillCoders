import express from "express";
import authRouter from "./authRoute.js";
import swapRouter from "./swapRoute.js";
const router = express.Router();

router.use("/auth", authRouter);
router.use("/swap", swapRouter);

export default router;