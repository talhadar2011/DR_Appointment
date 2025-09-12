import express from "express";
import openRoutes from "./routes/openRoutes.js";    
import authRoutes from "./routes/authRoutes.js";
import connectDB from "./config/dbConnection.js";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();
const PORT = process.env.PORT || 5001;
connectDB();
// Middleware
 app.use(express.json());

 app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));
 app.use(cookieParser());

// Importing Routes
app.use("/", openRoutes);
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});