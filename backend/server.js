const express = require("express");
const cors = require("cors");

const courseRoutes = require("./routes/courseRoutes");
const connectDB = require("../backend/config/db")

const app = express();

require("dotenv").config();

const PORT = process.env.PORT;

// Middleware
app.use(cors());
app.use(express.json());

// Root route
app.get("/", (req, res) => {
    res.send("Course Backend is running");
});

// API routes
app.use("/api/courses", courseRoutes);


connectDB();

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});