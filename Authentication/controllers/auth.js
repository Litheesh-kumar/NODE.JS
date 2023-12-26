const User = require('../models/user.js');



exports.getLogin = (req, res, next) => {
  // const isLoggedIn = req.get('Cookie').split(';')[0].trim().split('=')[0];
  console.log(req.session.isLoggedIn);
  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
    isAuthentiCated: false
  });
};

exports.postLogin = (req, res, next) => {
  User.findById('6583a58454c527fa1b182081')
    .then(user => {
      req.session.user = user;
      req.session.isLoggedIn = true;
      res.redirect('/');
    })
    .catch(err => console.log(err));
};

exports.postLogout = (req, res, next) => {
  req.session.destroy((err)=>{
    console.log(err);
    res.redirect('/');
  });
};
