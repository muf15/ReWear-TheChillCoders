import express from "express";
import {
  createSwap,
  getUserSwaps,
  getSwapById,
  updateSwapStatus,
} from "../controllers/swapController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();

// 🔁 Create a swap request (points/direct)
router.post("/", authMiddleware(["user"]), createSwap);

// 📄 View all swaps of the logged-in user (sent and received)
router.get("/", authMiddleware(["user"]), getUserSwaps);

// 🔍 View a specific swap by ID
router.get("/:id", authMiddleware(["user"]), getSwapById);

// ✏️ Update swap status (accept, reject, complete)
// - Only accessible to the owner or admin (as per middleware logic)
router.patch("/:id", authMiddleware(["admin", "user"]), updateSwapStatus);

export default router;
