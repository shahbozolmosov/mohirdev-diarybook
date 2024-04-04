const { Router } = require("express");

const { getUserProfile } = require("../controllers/user.controller");
const router = Router();
const { protected } = require("../middlewares/auth");

router.get("/profile/:id", protected, getUserProfile);

module.exports = router;
