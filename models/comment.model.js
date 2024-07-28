module.exports = (sequelize, Sequelize) => {
  const Comment = sequelize.define(
    "comment",
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      email: {
        type: Sequelize.STRING(200),
        allowNull: false,
      }, 
      comment: {
        type: Sequelize.STRING(1000),
        allowNull: false
      }
    },
    {
      timestamps: true,
    }
  );

  return Comment;
};
