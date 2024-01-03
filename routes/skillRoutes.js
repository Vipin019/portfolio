const express = require("express");
const {
  creatSkillsController,
  getSkillController,
  findAllEndorsementLengthController,
} = require("../controllers/skillController");

const router = express.Router();

router.post("/create", creatSkillsController);
router.get("/get", getSkillController);
router.get("/endorsement-len", findAllEndorsementLengthController);

module.exports = router;
