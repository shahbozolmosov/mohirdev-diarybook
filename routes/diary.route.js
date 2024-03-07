const { Router } = require('express')
const {getMyDiary, addNewDiary, getDiaryById} = require("../controllers/diary.controller");
const router = Router();
1
router.get('/my', getMyDiary);
router.get('/:id', getDiaryById );
router.post('/add', addNewDiary);

module.exports = router 

