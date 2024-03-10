const { Router } = require("express");
const {
  getMyDiary,
  addNewDiary,
  getDiaryById,
  updateDiaryPage,
  updateDiary,
  deleteDiary,
  addCommentToDiary,
} = require("../controllers/diary.controller");
const router = Router();
1;
router.get("/my", getMyDiary);
router.get("/:id", getDiaryById);
router.get("/update/:id", updateDiaryPage);
router.post("/add", addNewDiary);
router.post("/update/:id", updateDiary);
router.post("/delete/:id", deleteDiary);
router.post("/comment/:id", addCommentToDiary);

module.exports = router;
