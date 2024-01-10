const express = require("express");
const {
  creatSkillsController,
  getSkillController,
  findAllEndorsementLengthController,
  countAllSkillController,
} = require("../controllers/skillController");

const router = express.Router();

router.post("/create", creatSkillsController);
router.get("/get", getSkillController);
router.get("/endorsement-len", findAllEndorsementLengthController);
router.get("/get-total-count", countAllSkillController);
module.exports = router;
