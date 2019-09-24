const app = require('express').Router();
const passport = require('passport');

app.get('/',(req, res) =>{
    res.render('home', { user: req.user });
  });

app.get('/login',(req, res)=>{
    res.render('login');
    
  });
app.get('/logout',(req,res)=>{

  req.logout();
  res.redirect('/');
})

app.get('/login/facebook',passport.authenticate('facebook'));

app.get('/return', 
  passport.authenticate('facebook', { failureRedirect: '/login' }),(req, res) =>{
    res.redirect('/');

  });

app.get('/profile',
  require('connect-ensure-login').ensureLoggedIn(),(req, res)=>{
    res.render('profile', { user: req.user });
    
  });

  module.exports = authRouter;