const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// LOGIN
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// CREATE DEFAULT ADMIN (called once)
exports.registerAdmin = async (req, res) => {
  try {
    const exists = await User.findOne({ role: "admin" });

    if (exists) return res.json({ message: "Admin already exists" });

    const hashed = await bcrypt.hash("Admin123!", 10);

    const admin = await User.create({
      name: "System Administrator",
      email: "admin@healthcare.com",
      password: hashed,
      role: "admin",
    });

    res.json({ message: "Admin created", admin });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
