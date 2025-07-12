import { Swap } from "../models/swapModel.js";
import { Item } from "../models/itemModel.js";
import { User } from "../models/userModel.js";

// Create swap
export const createSwap = async (req, res) => {
  try {
    const { itemId, offeredItemId, swapType, pointsUsed } = req.body;
    const requestedBy = req.user.userId;

    const item = await Item.findById(itemId);
    if (!item || item.status !== "available") {
      return res.status(400).json({ message: "Item not available for swap" });
    }

    const ownerId = item.uploaderId.toString();

    if (swapType === "points") {
      const user = await User.findById(requestedBy);
      if (user.points < pointsUsed) {
        return res.status(400).json({ message: "Insufficient points" });
      }

      user.points -= pointsUsed;
      await user.save();
    }

    if (swapType === "direct") {
      const offeredItem = await Item.findById(offeredItemId);
      if (!offeredItem || offeredItem.status !== "available") {
        return res.status(400).json({ message: "Your offered item is not available" });
      }
      offeredItem.status = "requested";
      await offeredItem.save();
    }

    item.status = "requested";
    await item.save();

    const newSwap = await Swap.create({
      itemId,
      offeredItemId: swapType === "direct" ? offeredItemId : undefined,
      requestedBy,
      ownerId,
      swapType,
      pointsUsed: swapType === "points" ? pointsUsed : 0,
    });

    res.status(201).json({ message: "Swap request created", swap: newSwap });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Swap creation failed", error: err.message });
  }
};

// Get all swaps for current user (sent + received)
export const getUserSwaps = async (req, res) => {
  try {
    const userId = req.user.userId;
    const swaps = await Swap.find({
      $or: [{ requestedBy: userId }, { ownerId: userId }],
    })
      .populate("itemId offeredItemId")
      .sort({ createdAt: -1 });

    res.status(200).json({ swaps });
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch swaps", error: err.message });
  }
};

// Get a single swap by ID
export const getSwapById = async (req, res) => {
  try {
    const swap = await Swap.findById(req.params.id).populate("itemId offeredItemId");
    if (!swap) return res.status(404).json({ message: "Swap not found" });
    res.status(200).json({ swap });
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch swap", error: err.message });
  }
};

// Update swap status (admin or owner)
export const updateSwapStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const swap = await Swap.findById(req.params.id);
    if (!swap) return res.status(404).json({ message: "Swap not found" });

    swap.status = status;
    await swap.save();

    // Apply post-status effects
    if (status === "accepted") {
      await Item.findByIdAndUpdate(swap.itemId, { status: "swapped" });
      if (swap.swapType === "direct" && swap.offeredItemId) {
        await Item.findByIdAndUpdate(swap.offeredItemId, { status: "swapped" });
      }
    }

    if (status === "rejected" || status === "completed") {
      await Item.findByIdAndUpdate(swap.itemId, { status: "available" });
      if (swap.swapType === "direct" && swap.offeredItemId) {
        await Item.findByIdAndUpdate(swap.offeredItemId, { status: "available" });
      }
    }

    res.status(200).json({ message: "Swap updated", swap });
  } catch (err) {
    res.status(500).json({ message: "Swap update failed", error: err.message });
  }
};
