const db = require("../models/index");
const bcrypt = require('bcryptjs');
const User = db.user;

// Desc     Get login page
// Route    GET /auth/login
// Access   Public
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

// Desc     Get registration page
// Route    GET /auth/registration
// Access   Public
const getRegisterPage = async (req, res) => {
  try {  
    res.render("auth/registration", {
      title: "Registration",
    });
  } catch (error) {
    console.log(error);
  }
};

// Desc     Register new user
// Route    POST /auth/registration
// Access   Public
const registerUser = async (req, res) => {
  try {
    const {email, name, password, password2} = req.body
    if(password !== password2){
      return res.redirect('/auth/registration');
    }

    const userExist = await User.findOne({where: {email}});
    if(userExist) {
      return res.redirect('/auth/registration');
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password,salt)
    
    await User.create({
      email,
      name,
      password: hashedPassword
    })

    return res.redirect('/auth/login')
    
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
    req.session.user = {
      id: 1,
      email: 'user@gmail.com',
      name: 'user',
      password: '1234567',
    }
    req.session.save(err => {
      if(err) throw err;
      res.redirect('/diary/my');
    })
  } catch (error) {
    console.log(error);
  }
}; 

// Desc     Logout user
// Route    POST /auth/logout
// Access   Private

const logout = (req,res) => {
  req.session.destroy(() => {
    res.redirect('/auth/login');
  })
}

module.exports = {
  getLoginPage,
  loginUser,
  logout,
  getRegisterPage,
  registerUser,
};
