const passport  = require('passport');
const googleOtuth = require('passport-google-oauth20').OAuth2Strategy;

passport.use(new googleOtuth({
    //options
     callbackURL:'http://localhost:3000/auth/google/redirect',
     clientID:'533471149069-s13pbob7598gqc060uljq62a5cdpfd46.apps.googleusercontent.com',
     clientSecret:'tFUky8nknv9Ra_Rlpa_aGILC'
},()=>{

    //passport callbaack
    console.log('shfa');

})
);