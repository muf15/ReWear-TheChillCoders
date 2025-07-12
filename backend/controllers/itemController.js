import { Item } from "../models/itemModel.js";
import {User} from "../models/userModel.js";

export const getAllItems = async (req, res) => {
  try {
    const {
      page = 1,
      limit = 10,
      category,
      type,
      condition,
      size,
      status = "available",
      tags,
      search,
      sortBy = "createdAt",
      sortOrder = "desc",
      approved = "true",
    } = req.query;
    const filter = {};
    if (approved !== "all") filter.isApproved = approved === "true";
    if (category) filter.category = category;
    if (type) filter.type = type;
    if (condition) filter.condition = condition;
    if (size) filter.size = size;
    if (status) filter.status = status;
    if (tags) {
      const tagArray = tags.split(",").map((tag) => tag.trim());
      filter.tags = { $in: tagArray };
    }
    if (search) {
      filter.$or = [
        { title: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
      ];
    }
    const skip = (parseInt(page) - 1) * parseInt(limit);
    const sort = {};
    sort[sortBy] = sortOrder === "desc" ? -1 : 1;
    const items = await Item.find(filter)
      .populate("uploaderId", "name email profileImage")
      .sort(sort)
      .skip(skip)
      .limit(parseInt(limit));
    const totalItems = await Item.countDocuments(filter);
    const totalPages = Math.ceil(totalItems / parseInt(limit));
    res.status(200).json({
      success: true,
      data: items,
      pagination: {
        currentPage: parseInt(page),
        totalPages,
        totalItems,
        itemsPerPage: parseInt(limit),
        hasNextPage: parseInt(page) < totalPages,
        hasPrevPage: parseInt(page) > 1,
      },
    });
  } catch (error) {
    console.error("Error fetching items:", error);
    res.status(500).json({
      success: false,
      message: "Error fetching items",
      error: error.message,
    });
  }
};

export const getItemById = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id).populate(
      "uploaderId",
      "name email profileImage points"
    );
    if (!item) {
      return res.status(404).json({
        success: false,
        message: "Item not found",
      });
    }
    res.status(200).json({
      success: true,
      data: item,
    });
  } catch (error) {
    console.error("Error fetching item:", error);
    res.status(500).json({
      success: false,
      message: "Error fetching item",
      error: error.message,
    });
  }
};

export const createItem = async (req, res) => {
  try {
    const {
      title,
      description,
      category,
      type,
      size,
      condition,
      tags,
      images, 
    } = req.body;
    if (!title || !category || !type || !condition) {
      return res.status(400).json({
        success: false,
        message: "Title, category, type, and condition are required",
      });
    }
    const validCategories = ["Men", "Women", "Kids", "Unisex"];
    const validTypes = [
      "Shirt",
      "T-Shirt",
      "Blouse",
      "Sweater",
      "Hoodie",
      "Tank Top",
      "Jacket",
      "Coat",
      "Blazer",
      "Cardigan",
      "Pants",
      "Jeans",
      "Shorts",
      "Skirt",
      "Leggings",
      "Dress",
      "Jumpsuit",
      "Suit",
      "Shoes",
      "Sneakers",
      "Boots",
      "Sandals",
      "Bag",
      "Hat",
      "Scarf",
      "Belt",
      "Jewelry",
      "Watch",
      "Underwear",
      "Bra",
      "Pajamas",
      "Swimwear",
      "Other",
    ];
    const validConditions = ["New", "Like New", "Good", "Used"];
    if (!validCategories.includes(category)) {
      return res.status(400).json({
        success: false,
        message: "Invalid category",
      });
    }
    if (!validTypes.includes(type)) {
      return res.status(400).json({
        success: false,
        message: "Invalid type",
      });
    }
    if (!validConditions.includes(condition)) {
      return res.status(400).json({
        success: false,
        message: "Invalid condition",
      });
    }
    const newItem = new Item({
      uploaderId: req.user.userId,
      title: title.trim(),
      description: description?.trim(),
      category,
      type,
      size: size?.trim(),
      condition,
      tags: tags || [],
      images: images || [],
    });
    const savedItem = await newItem.save();
    await savedItem.populate("uploaderId", "name email profileImage");
    res.status(201).json({
      success: true,
      message: "Item created successfully",
      data: savedItem,
    });
  } catch (error) {
    console.error("Error creating item:", error);
    res.status(500).json({
      success: false,
      message: "Error creating item",
      error: error.message,
    });
  }
};

export const updateItem = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) {
      return res.status(404).json({
        success: false,
        message: "Item not found",
      });
    }
    if (
      item.uploaderId.toString() !== req.user.userId &&
      req.user.role !== "admin"
    ) {
      return res.status(403).json({
        success: false,
        message: "Not authorized to update this item",
      });
    }
    const {
      title,
      description,
      category,
      type,
      size,
      condition,
      tags,
      images,
      status,
    } = req.body;
    if (category) {
      const validCategories = ["Men", "Women", "Kids", "Unisex"];
      if (!validCategories.includes(category)) {
        return res.status(400).json({
          success: false,
          message: "Invalid category",
        });
      }
    }
    if (type) {
      const validTypes = [
        "Shirt",
        "T-Shirt",
        "Blouse",
        "Sweater",
        "Hoodie",
        "Tank Top",
        "Jacket",
        "Coat",
        "Blazer",
        "Cardigan",
        "Pants",
        "Jeans",
        "Shorts",
        "Skirt",
        "Leggings",
        "Dress",
        "Jumpsuit",
        "Suit",
        "Shoes",
        "Sneakers",
        "Boots",
        "Sandals",
        "Bag",
        "Hat",
        "Scarf",
        "Belt",
        "Jewelry",
        "Watch",
        "Underwear",
        "Bra",
        "Pajamas",
        "Swimwear",
        "Other",
      ];
      if (!validTypes.includes(type)) {
        return res.status(400).json({
          success: false,
          message: "Invalid type",
        });
      }
    }
    if (condition) {
      const validConditions = ["New", "Like New", "Good", "Used"];
      if (!validConditions.includes(condition)) {
        return res.status(400).json({
          success: false,
          message: "Invalid condition",
        });
      }
    }
    if (status) {
      const validStatuses = ["available", "requested", "swapped"];
      if (!validStatuses.includes(status)) {
        return res.status(400).json({
          success: false,
          message: "Invalid status",
        });
      }
    }
    const updatedItem = await Item.findByIdAndUpdate(
      req.params.id,
      {
        ...(title && { title: title.trim() }),
        ...(description !== undefined && { description: description?.trim() }),
        ...(category && { category }),
        ...(type && { type }),
        ...(size !== undefined && { size: size?.trim() }),
        ...(condition && { condition }),
        ...(tags && { tags }),
        ...(images && { images }),
        ...(status && { status }),
      },
      { new: true, runValidators: true }
    ).populate("uploaderId", "name email profileImage");
    res.status(200).json({
      success: true,
      message: "Item updated successfully",
      data: updatedItem,
    });
  } catch (error) {
    console.error("Error updating item:", error);
    res.status(500).json({
      success: false,
      message: "Error updating item",
      error: error.message,
    });
  }
};

export const deleteItem = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) {
      return res.status(404).json({
        success: false,
        message: "Item not found",
      });
    }
    if (
      item.uploaderId.toString() !== req.user.userId &&
      req.user.role !== "admin"
    ) {
      return res.status(403).json({
        success: false,
        message: "Not authorized to delete this item",
      });
    }
    await Item.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      message: "Item deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting item:", error);
    res.status(500).json({
      success: false,
      message: "Error deleting item",
      error: error.message,
    });
  }
};

export const getItemsByUser = async (req, res) => {
  try {
    const { id } = req.params;  // Fixed: get id from URL parameters
    const { page = 1, limit = 10, status } = req.query;
    const filter = { uploaderId: id };
    
    if (status) filter.status = status;
    
    const skip = (parseInt(page) - 1) * parseInt(limit);
    const items = await Item.find(filter)
      .populate("uploaderId", "name email profileImage")
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(parseInt(limit));
      
    const totalItems = await Item.countDocuments(filter);
    const totalPages = Math.ceil(totalItems / parseInt(limit));
    
    res.status(200).json({
      success: true,
      data: items,
      pagination: {
        currentPage: parseInt(page),
        totalPages,
        totalItems,
        itemsPerPage: parseInt(limit),
      },
    });
  } catch (error) {
    console.error("Error fetching user items:", error);
    res.status(500).json({
      success: false,
      message: "Error fetching user items",
      error: error.message,
    });
  }
};
