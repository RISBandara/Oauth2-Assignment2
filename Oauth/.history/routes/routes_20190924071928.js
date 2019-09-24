const router = require('express').Router();
const passport = require('passport');

router.get('/',(req, res) =>{
    res.render('home', { user: req.user });
  });

  router.get('/login',(req, res)=>{
    res.render('login');
    
  });
  router.get('/logout',(req,res)=>{

  req.logout();
  res.redirect('/');
})

  router.get('/profile',
  require('connect-ensure-login').ensureLoggedIn(),(req, res)=>{
    res.render('profile', { user: req.user });
    
  });

  module.exports = router;