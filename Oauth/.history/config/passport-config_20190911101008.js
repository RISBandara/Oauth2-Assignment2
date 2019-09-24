const passport  = require('passport');
const googleOtuth = require('passport-google-oauth20');

passport.use(new googleOtuth({
    //options
}),()=>{

    //passport callbaack
}
);