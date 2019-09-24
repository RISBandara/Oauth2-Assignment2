const passport  = require('passport');
const googleOtuth = require('passport-google-oauth20');

passport.use(new googleOtuth({
    //options
     callbackURL:'/auth/facebook/callback',
     clientID:'6533471149069-s13pbob7598gqc060uljq62a5cdpfd46.apps.googleusercontent.com',
     clientSecret:'d6112820740e1cf969cdc74f516f7aa6'
},()=>{

    //passport callbaack
    console.log('shfa');

})
);