const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bcrypt = require("bcryptjs");
const path = require("path");
const User = require("../models/User");

// Load .env from parent directory
dotenv.config({ path: path.resolve(__dirname, "../.env") });

mongoose.connect(process.env.MONGO_URI).then(async () => {
  const password = await bcrypt.hash("Admin123!", 10);

  await User.create({
    email: "admin@healthcare.com",
    username: "admin",
    password,
    role: "admin",
  });

  console.log("Default admin created successfully!");
  process.exit();
});
