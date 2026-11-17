
const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authmiddleware");
const { authorizeRoles } = require("../middleware/authmiddleware");

// All routes below require a valid Admin token.
router.use(authMiddleware, authorizeRoles("admin"));

router.get("/dashboard", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Welcome to Admin Dashboard",
    admin: req.user,
  });
});

router.get("/users", async (req, res) => {
  try {
    const User = require("../models/userModel");

    const users = await User.find()
      .select("-password")
      .lean();

    return res.status(200).json({
      success: true,
      count: users.length,
      users,
    });
  } catch (error) {
    console.error("Fetch users error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

module.exports = router;