const passport  = require('passport');
const facebookOtuth = require('passport-facebook').Strategy;

passport.use(new facebookOtuth({
    //options
     callbackURL:'http://localhost:3000/auth/facebook/redirect',
     clientID:'641226966364464',
     clientSecret:'d6112820740e1cf969cdc74f516f7aa6'
},(accessToken, refreshToken, profile, cb)=>{

    
        return cb(null, profile);

})
);