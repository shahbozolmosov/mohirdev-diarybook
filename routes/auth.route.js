const { Router } = require("express");
 
const { getLoginPage, loginUser, logout, getRegisterPage } = require("../controllers/auth.controller");
const router = Router();

router.get("/login", getLoginPage);
router.get("/registration", getRegisterPage);
router.post("/login", loginUser);
router.get("/logout", logout);

module.exports = router;
