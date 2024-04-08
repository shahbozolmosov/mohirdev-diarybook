const express = require("express");
const dotenv = require("dotenv");
const exphbs = require("express-handlebars");
const session = require("express-session");
const pgStore = require("connect-pg-simple")(session);
const csrf = require('csurf')
const pool = require("./config/db");
const db = require("./models/index");

// Initial env variable
dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extends: false }));
app.use(
  session({
    store: new pgStore({
      pool,
      tableName: "user_session",
    }),
    secret: "my secret value",
    resave: false,
    saveUninitialized: false,
  })
);


// Initialize template engine (handlebars)
app.engine(".hbs", exphbs.engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");

// Initialize routes
app.use("/diary", require("./routes/diary.route"));
app.use((req, res, next ) => {
  res.locals.csrfToken = req.csrfToken()
  next()
})
app.use(csrf())
app.use("/auth", require("./routes/auth.route"));
app.use("/user", require("./routes/user.route"));
app.use("/", async (req, res) => {
  try {
    if (req.session.isLogged) {
      return res.redirect("/diary/my");
    }
    return res.redirect("/auth/login");
  } catch (error) {
    console.log(err);
  }
});

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
