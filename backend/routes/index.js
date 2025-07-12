import express from "express";
import authRouter from "./authRoute.js";
import swapRouter from "./swapRoute.js";
import itemsRouter from "./itemsRoute.js";

const router = express.Router();

router.use("/auth", authRouter);
router.use("/swap", swapRouter);
router.use('/items', itemsRouter);

export default router;