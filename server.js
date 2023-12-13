const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
const session = require("express-session"); //use for gogin and register by google

const connectDB = require("./config/db.js");
const authRoute = require("./routes/authRoutes.js");

const app = express();
//middlewares
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(
  session({
    //use for google login and registerd
    resave: false,
    saveUninitialized: true,
    secret: process.env.SESSION_SECRET,
  })
);

//mongodb connection config
connectDB();

//res apis
app.use("/api/v2/auth", authRoute);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`.green);
});
