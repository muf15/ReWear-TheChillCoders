import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }, // Hashed
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    points: { type: Number, default: 0 },
    profileImage: { type: String },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", UserSchema);
