const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
const session = require("express-session"); //use for gogin and register by google
const formidableMiddleware = require("express-formidable");
const cookieParser = require("cookie-parser");

const connectDB = require("./config/db.js");
const authRoute = require("./routes/authRoutes.js");
const userRoute = require("./routes/userRoutes.js");
const skillRoutes = require("./routes/skillRoutes.js");
const featureRoute = require("./routes/featureRoutes.js");

const app = express();
//middlewares
dotenv.config({ path: "./.env" });
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
app.use(cookieParser());

//mongodb connection config
connectDB();

app.use(express.static(__dirname + "/client/build")); //need to tell wheater it is a build version or a development version

//res apis
app.use("/api/v2/auth", authRoute);
app.use("/api/v2/user", formidableMiddleware(), userRoute);
app.use("/api/v2/skill", formidableMiddleware(), skillRoutes);
app.use("/api/v2/feature", formidableMiddleware(), featureRoute);

app.use("*", function (req, res) {
  res.sendFile(__dirname + "/client/build/index.html");
});
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`.green);
});
