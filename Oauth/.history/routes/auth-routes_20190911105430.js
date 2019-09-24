const router = require('express').Router();
const passport = require('passport');

//auth login
router.get('/login',(req,res)=>{
    
    res.render('login');
})

//auth with google
router.get('/google',(req,res)=>{

    //hadle with passport js
    res.send('logging with google');
});

router.get('/logout',(req,res)=>{
    res.send('logout');
})

module.exports = router;