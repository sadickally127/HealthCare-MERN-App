const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bcrypt = require("bcryptjs");
const User = require("./models/User");

dotenv.config();

mongoose.connect(process.env.MONGO_URI).then(async () => {
  const password = await bcrypt.hash("admin123", 10);

  await User.create({
    username: "admin",
    password,
    role: "admin",
  });

  console.log("Default admin created successfully!");
  process.exit();
});
