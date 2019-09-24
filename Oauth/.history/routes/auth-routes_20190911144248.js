const router = require('express').Router();
const passport = require('passport'); 

//auth login
router.get('/login',(req,res)=>{
    
    res.render('login');
})

//auth with google
router.get('/facebook',passport.authenticate('facebook',{
    scope:'public_profile'
}));

router.get('/logout',(req,res)=>{
    res.send('logout');
})

router.get('/facebook/callback',passport.authenticate('facebook'),(req,res)=>{
    res.send('reached callback');
})
module.exports = router;