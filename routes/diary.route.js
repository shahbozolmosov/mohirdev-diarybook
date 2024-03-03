const { Router } = require('express')
const {getMyDiary, addNewDiary} = require("../controllers/diary.controller");
const router = Router();
1
router.get('/my', getMyDiary);
router.post('/add', addNewDiary);

module.exports = router 

