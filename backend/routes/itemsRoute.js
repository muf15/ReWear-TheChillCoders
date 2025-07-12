import express from "express";
import {
  getAllItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem,
  getItemsByUser,
} from "../controllers/itemController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Item routes (non-admin)
router.get("/", getAllItems);
router.get("/:id", getItemById);
router.post("/", authMiddleware(["user"]), createItem);
router.put("/:id", authMiddleware(["user"]), updateItem);
// router.delete("/:id", authMiddleware(['user']), deleteItem);
router.get("/user/:id", getItemsByUser);

export default router;
