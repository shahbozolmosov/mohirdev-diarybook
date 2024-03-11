const db = require("../models/index");
const User = db.user;

// Desc     Get login page
// Route    GET /auth/login
// Access   Private
const getLoginPage = async (req, res) => {
  try {
    // const isAuthenticated = req.get('Cookie').split('=')[1] === "true"

    const isAuthenticated = req.session.isLogged
    
    res.render("auth/login", {
      title: "Login",
      isAuthenticated
    });
  } catch (error) {
    console.log(error);
  }
};

// Desc     Login user
// Route    POST /auth/login
// Access   Public
const loginUser = async (req, res) => {
  try {
    // res.setHeader('Set-Cookie', 'loggedIn=true')
    req.session.isLogged = true
    res.redirect('/diary/my');
  } catch (error) {
    console.log(error);
  }
}; 

module.exports = {
  getLoginPage,
  loginUser
};
