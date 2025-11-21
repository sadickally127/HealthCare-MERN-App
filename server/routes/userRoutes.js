// server/routes/userRoutes.js
import express from "express";
import User from "../models/User.js";
import auth from "../middleware/auth.js";
import authorize from "../middleware/authorize.js";

const router = express.Router();

// GET all users (admin only)
router.get("/", auth, authorize("admin"), async (req, res) => {
  const users = await User.find().select("-password").sort({ createdAt: -1 });
  res.json(users);
});

// Create user (admin only)
router.post("/", auth, authorize("admin"), async (req, res) => {
  try {
    const { name, username, password, role } = req.body;
    const exists = await User.findOne({ username: username.toLowerCase() });
    if (exists) return res.status(400).json({ message: "User exists" });

    const user = await User.create({ name, username, password, role });
    res.status(201).json({
      message: "User created",
      user: {
        id: user._id,
        name: user.name,
        username: user.username,
        role: user.role,
      },
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Optionally: update user role or delete user routes (admin only)
router.delete("/:id", auth, authorize("admin"), async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

export default router;
