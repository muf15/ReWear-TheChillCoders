import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema(
  {
    uploaderId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    title: { type: String, required: true },
    description: { type: String },
    category: { type: String }, // e.g. Men, Women, Kids
    type: { type: String }, // e.g. Shirt, Jacket
    size: { type: String },
    condition: { type: String }, // New, Like New, Used
    tags: [String],
    images: [String], // Array of image URLs
    status: {
      type: String,
      enum: ["available", "requested", "swapped"],
      default: "available",
    },
    isApproved: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const Item = mongoose.model("Item", ItemSchema);
