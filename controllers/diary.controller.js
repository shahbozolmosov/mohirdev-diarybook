const db = require("../models/index");
const Diary = db.diary;

// Desc     Get all my diaries page
// Route    GET /diary/my
// Access   Private
const getMyDiary = async (req, res) => {
  try {
    const diaries = await Diary.findAll({
      raw: true,
    });
    res.render("diary/my-diary", {
      title: "My Diary",
      diaries,
    });
  } catch (error) {
    console.log(error);
  }
};

// Desc     Get diary by id
// Route    GET /diary/my
// Access   Private
const getDiaryById = async (req, res) => {
  try {
    // const diaries = await Diary.findAll({
    //   where: {id: req.params.id },
    //   raw: true
    // });
    const diary = await Diary.findByPk(req.params.id, {
      raw: true,
    });
    res.render("diary/one-diary", {
      title: "One Diary",
      diary: diary,
    });
  } catch (error) {
    console.log(error);
  }
};

// Desc     Add new diary
// Route    POST /diary/my
// Access   Private
const addNewDiary = async (req, res) => {
  try {
    const { imageUrl, text } = req.body;
    await Diary.create({
      imageUrl,
      text,
    });
    res.redirect("/diary/my");
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getMyDiary,
  getDiaryById,
  addNewDiary,
};
