import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import UserRouter from "./routes/User.js";
import ProductRoutes from "./routes/Products.js";

dotenv.config(); // Load environment variables

const app = express();

// Set up middleware
app.use(cors({
  origin: ["https://ecommerce-525.netlify.app", "https://master--ecommerce-525.netlify.app"], // Add all necessary origins
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
}));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));

// Error handling middleware
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong";
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});

const port = process.env.PORT || 8080;

// Basic route
app.get("/", async (req, res) => {
  res.status(200).json({
    message: "Hello Developers",
  });
});

// Routes
app.use("/api/user", UserRouter);
app.use("/api/products", ProductRoutes);

const startServer = async () => {
  try {
    // Connect to MongoDB
    const mongoURI = process.env.MONGO_URI;
    if (!mongoURI) {
      throw new Error("MONGO_URI is not defined in environment variables.");
    }

    await mongoose.connect(mongoURI); // No need for deprecated options
    console.log('Connected to MongoDB');

    // Start the server
    app.listen(port, () => {
      console.log(`Server started on port ${port}`);
    });
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); // Exit process with failure if the connection fails
  }
};

startServer();
