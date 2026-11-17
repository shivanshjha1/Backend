
const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authmiddleware");
const { authorizeRoles } = require("../middleware/authmiddleware");

// Only regular users can access these routes.
router.use(authMiddleware, authorizeRoles("user"));

router.get("/dashboard", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Welcome to User Dashboard",
    user: req.user,
  });
});

module.exports = router;