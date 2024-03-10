const { Router } = require('express')
const {getMyDiary, addNewDiary, getDiaryById, updateDiaryPage, updateDiary} = require("../controllers/diary.controller");
const router = Router();
1
router.get('/my', getMyDiary);
router.get('/:id', getDiaryById );
router.get('/update/:id', updateDiaryPage);
router.post('/add', addNewDiary);
router.post('/update/:id', updateDiary);

module.exports = router 

