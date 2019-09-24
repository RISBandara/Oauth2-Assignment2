const passport  = require('passport');
const googleOtuth = require('passport-facebook').Strategy;

passport.use(new googleOtuth({
    //options
     callbackURL:'http://localhost:3000/auth/google/redirect',
     clientID:'641226966364464',
     clientSecret:'d6112820740e1cf969cdc74f516f7aa6'
},()=>{

    //passport callbaack
    console.log('shfa');

})
);