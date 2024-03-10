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

// user
db.user = require("./user.model")(sequelize, Sequelize);

// relationship
// user
db.user.hasMany(db.diary, {
  as: "diaries",
  onDelete: "CASCADE",
  constraints: true,
});
db.user.hasMany(db.comment, {
  as: "comment",
  onDelete: "CASCADE",
  constraints: true,
});

// diary
db.diary.hasMany(db.comment, {
  as: "comment",
  onDelete: "CASCADE",
  constraints: true,
});
db.diary.belongsTo(db.user, {
  foreignKey: "userId",
  as: "user",
});

// comment
db.comment.belongsTo(db.user, {
  foreignKey: "userId",
  as: "user",
});
db.comment.belongsTo(db.diary, {
  foreignKey: "diaryId",
  as: "diary",
});

module.exports = db;
