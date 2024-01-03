const express = require("express");
const {
  createFeatureController,
  getFeatureController,
} = require("../controllers/featureController");

const router = express.Router();

router.post("/create", createFeatureController);
router.get("/get", getFeatureController);

module.exports = router;
