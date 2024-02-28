const express = require("express");
const dotenv = require("dotenv");
const exphbs = require("express-handlebars");

// Initial env variable
dotenv.config();

const app = express();

// Initialize template engine (handlebars)
app.engine(".hbs", exphbs.engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");

// Initialize routes
app.use("/diary", require("./routes/diary.route"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
