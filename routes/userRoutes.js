const express = require("express");
const { createProfileController } = require("../controllers/userController");

const router = express.Router();

router.post("/create", createProfileController);

module.exports = router;
