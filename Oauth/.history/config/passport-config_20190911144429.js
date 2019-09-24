const passport  = require('passport');
const facebookOtuth = require('passport-facebook');

passport.use(new facebookOtuth({
    //options
     callbackURL:'/auth/facebook/callback',
     clientID:'641226966364464',
     clientSecret:'d6112820740e1cf969cdc74f516f7aa6'
},()=>{

    //passport callbaack
    console.log('shfa');

})
);