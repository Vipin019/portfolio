const express = require("express");
const {
  createFeatureController,
  getFeatureController,
  countAllFeaturesController,
} = require("../controllers/featureController");

const router = express.Router();

router.post("/create", createFeatureController);
router.get("/get", getFeatureController);
router.get("/get-total-count", countAllFeaturesController);

module.exports = router;
