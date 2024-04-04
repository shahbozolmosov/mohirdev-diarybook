const { raw } = require("express");
const db = require("../models");

const User = db.user;
const Diary = db.diary;

// Desc     Get user profile
// Route    GET /user/profile/:id
// Access   Private
const getUserProfile = async (req, res) => {
  try {
    const user = await User.findOne({
      where: { id: req.params.id },
      raw: true,
    });

    const diaries = await Diary.findAll({
      where: { userId: user.id },
      raw: true,
    });

    res.render("user/profile", {
      title: user.name,
      user,
      diariesLength: diaries.length,
      isAuthenticated: req.session.isLogged,
    });
  } catch (error) {
    console.log(error);
  }
};

// Desc     Get my profile
// Route    GET /user/profile/my
// Access   Private
const getMyProfile = async (req, res) => {
  try {
    const user = req.session.user; 
    const diaries = await Diary.findAll({
      where: { userId: user.id },
      raw: true,
    });

    res.render("user/myProfile", {
      title: user.name,
      user,
      diariesLength: diaries.length,
      isAuthenticated: req.session.isLogged,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getUserProfile,
  getMyProfile,
};
