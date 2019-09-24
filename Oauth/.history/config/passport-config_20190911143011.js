const passport  = require('passport');
const facebookOtuth = require('passport-facebook');

passport.use(new facebookOtuth({
    //options
     callbackURL:'/auth/google/redirect',
     clientID:'533471149069-s13pbob7598gqc060uljq62a5cdpfd46.apps.googleusercontent.com',
     clientSecret:'tFUky8nknv9Ra_Rlpa_aGILC'
},()=>{

    //passport callbaack
    console.log('shfa');

})
);