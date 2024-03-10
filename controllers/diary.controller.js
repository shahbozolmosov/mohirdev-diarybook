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
      title: "Diary",
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

// Desc     Update diary page
// Route    GET /diary/update/:id
// Access   Private
const updateDiaryPage = async (req, res) => {
  try {
    const diary = await Diary.findByPk(req.params.id, {
      raw: true,
    });
    res.render("diary/update-diary", {
      title: "Diary",
      diary: diary,
    });
  } catch (error) {
    console.log(error);
  }
};

// Desc     Update diary
// Route    POST /diary/update/:id
// Access   Private
const updateDiary = async (req, res) => {
  try {
    await Diary.update(
      { text: req.body.text },
      { where: { id: req.params.id } }
    );

    res.redirect("/diary/my");
  } catch (error) {
    console.log(error);
  }
};

// Desc     Delete diary
// Route    POST /diary/delete/:id
// Access   Private
const deleteDiary = async (req, res) => {
  try {
    await Diary.destroy({
      where: { id: req.params.id },
    });

    res.redirect("/diary/my");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getMyDiary,
  getDiaryById,
  addNewDiary,
  updateDiaryPage,
  updateDiary,
  deleteDiary
};
