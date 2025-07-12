import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema(
  {
    uploaderId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    title: { type: String, required: true },
    description: { type: String },
    category: { 
      type: String, 
      enum: ["Men", "Women", "Kids", "Unisex"],
      required: true 
    },
    type: { 
      type: String, 
      enum: [
        // Tops
        "Shirt", "T-Shirt", "Blouse", "Sweater", "Hoodie", "Tank Top",
        // Outerwear
        "Jacket", "Coat", "Blazer", "Cardigan",
        // Bottoms
        "Pants", "Jeans", "Shorts", "Skirt", "Leggings",
        // Dresses & Sets
        "Dress", "Jumpsuit", "Suit",    
        // Footwear
        "Shoes", "Sneakers", "Boots", "Sandals",    
        // Accessories
        "Bag", "Hat", "Scarf", "Belt", "Jewelry", "Watch",    
        // Undergarments & Sleepwear
        "Underwear", "Bra", "Pajamas", "Swimwear",    
        // Other
        "Other"
      ],
      required: true 
    },
    size: { type: String },
    condition: {
      type: String,
      enum: ["New", "Like New", "Good", "Used"],
      required: true,
    },
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
