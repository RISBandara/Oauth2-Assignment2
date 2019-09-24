const router = require('express').Router();
const passport = require('passport'); 

//auth login
router.get('/login',(req,res)=>{
    
    res.render('login');
})

//auth with facebook
router.get('/facebook',passport.authenticate('facebook',{
    scope:['user_friends', 'email']
}));

router.get('/logout',(req,res)=>{
    res.send('logout');
})

router.get('/facebook/redirect',passport.authenticate('facebook'),(req,res)=>{
    res.send('reached callback');
})
module.exports = router;