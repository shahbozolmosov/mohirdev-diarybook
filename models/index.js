const Sequelize = require("sequelize");

const sequelize = new Sequelize("diarybook", "postgres", "secret", {
  host: "localhost",
  dialect: "postgres",
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// diary
db.diary = require("./diary.model")(sequelize, Sequelize);

// comment
db.comment = require("./comment.model")(sequelize, Sequelize);

module.exports = db;
