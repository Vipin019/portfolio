import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import authRoutes from "./routes/authRoute.js";
import connectDB from "./config/db.js";

//config dotenv
dotenv.config();

//es module file dir
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//databse config
connectDB();

//resapi object
const app = express();

//middelwares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname)));

//universal route
app.use("*", function (req, res) {
  res.sendFile(__dirname, path.join("./index.html"));
});

//routes
app.use("/api/v1/auth", authRoutes);

//PORT
const PORT = process.env.PORT;
//server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
