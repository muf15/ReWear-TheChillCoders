import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../models/userModel.js";

const createToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || "3d",
  });
};

// Signup controller
export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    const token = createToken(user._id);
    res.cookie("jwt", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 3 * 24 * 60 * 60 * 1000, // 3 days
    });

    res.status(201).json({
      message: "Signup successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    res.status(500).json({ message: "Signup failed", error: err.message });
  }
};

// Login controller
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user)
      return res.status(400).json({ message: "Invalid email or password" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid email or password" });

    const token = createToken(user._id);
    res.cookie("jwt", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 3 * 24 * 60 * 60 * 1000,
    });

    res.status(200).json({
      message: "Login successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    res.status(500).json({ message: "Login failed", error: err.message });
  }
};

// Logout controller
export const logout = (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: "Logged out successfully" });
};
