
const express = require("express");
const router = express.Router();

const authController = require("../controller/authController");

const authMiddleware = require("../middleware/authmiddleware");

// Public routes
router.post("/register", authController.register);
router.post("/login", authController.login);

// Any authenticated user can access their profile
router.get("/profile", authMiddleware, authController.getProfile);

module.exports = router;