const db = require("../models/index");
const Diary = db.diary;

// Desc     Get all my diaries page
// Route    GET diary/my
// Access   Private
const getMyDiary = (req, res) => {
  res.render("diary/my-diary");
};

// Desc     Add new diary
// Route    POST diary/my
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
  addNewDiary,
};
