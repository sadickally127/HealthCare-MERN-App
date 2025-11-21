const express = require("express");
const { login, registerAdmin } = require("../controllers/authController");

const router = express.Router();

router.post("/login", login);
router.post("/create-admin", registerAdmin); // run once

module.exports = router;
