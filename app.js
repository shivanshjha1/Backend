const express = require("express");
const app = express();

const authRoutes = require("./routes/authRoutes");
const adminRoutes = require("./routes/adminRoutes");
const userRoutes = require("./routes/userRoutes");

app.use(express.json());

// Existing authentication APIs
app.use("/api/auth", authRoutes);

// RBAC APIs
app.use("/api/admin", adminRoutes);
app.use("/api/user", userRoutes);

module.exports = app;