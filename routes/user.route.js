const { Router } = require("express");

const { getUserProfile, getMyProfile, updateProfilePage } = require("../controllers/user.controller");
const router = Router();
const { protected } = require("../middlewares/auth");

router.get("/profile/my", protected, getMyProfile);
router.get("/profile/update", protected, updateProfilePage);
router.get("/profile/:id", protected, getUserProfile);

module.exports = router;
