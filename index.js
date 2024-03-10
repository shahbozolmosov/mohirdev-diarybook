const express = require("express");
const dotenv = require("dotenv");
const exphbs = require("express-handlebars");
const db = require("./models/index");

// Initial env variable
dotenv.config();

const app = express();

// Enable post form data
app.use(express.json());
app.use(express.urlencoded({ extends: false }));

// Initialize template engine (handlebars)
app.engine(".hbs", exphbs.engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");

// Initialize routes
app.use("/diary", require("./routes/diary.route"));

const PORT = process.env.PORT || 3000;

const start = async () => {
  try {
    // const connect = await db.sequelize.sync({ force: true });
    const connect = await db.sequelize.sync();

    app.listen(PORT, () => {
      console.log(`Server running on port: ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
