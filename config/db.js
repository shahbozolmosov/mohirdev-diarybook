const Sequelize = require("sequelize");

const sequelize = new Sequelize("diarybook", "postgres", "secret", {
  host: "localhost",
  dialect: "postgres",
});


module.exports = sequelize;