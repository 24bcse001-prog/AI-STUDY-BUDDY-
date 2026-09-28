require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./src/utils/db");

const authRoutes = require("./src/routes/auth");
const materialRoutes = require("./src/routes/material");
const aiRoutes = require("./src/routes/ai");

const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" }));

app.get("/", (req, res) => {
  res.json({ message: "AI StudyBuddy API is running" });
});

app.use("/api/auth", authRoutes);
app.use("/api/material", materialRoutes);
app.use("/api/ai", aiRoutes);

const PORT = process.env.PORT || 5000;

connectDB()
  .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
  .catch((err) => {
    console.error("Database connection failed:", err.message);
    process.exit(1);
  });
