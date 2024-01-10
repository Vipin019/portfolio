const express = require("express");
const {
  createProjectController,
  getProjectController,
  countAllProjectController,
} = require("../controllers/projectController");

const router = express.Router();

router.post("/create", createProjectController);
router.get("/get", getProjectController);
router.get("/get-total-count", countAllProjectController);

module.exports = router;
