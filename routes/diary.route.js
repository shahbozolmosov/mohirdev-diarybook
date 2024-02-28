const { Route } = require('express')
const {getMyDiary} = require("../controllers/diary.controller");
const router = Route();

router.get('/my', getMyDiary);

module.exports = router 

