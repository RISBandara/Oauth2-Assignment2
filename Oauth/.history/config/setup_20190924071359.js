const passport = require('passport');
const Strategy = require('passport-facebook').Strategy;

passport.use(new Strategy({
    clientID: '641226966364464',
    clientSecret: 'd6112820740e1cf969cdc74f516f7aa6',
    callbackURL: '/return',
    profileFields: ['id', 'displayName', 'emails', 'photos']
  },
  (accessToken, refreshToken, profile, cb) =>{
    
    return cb(null, profile);
  }));

//serialize and deserialized.
passport.serializeUser((user, cb) =>{
  cb(null, user);
});

passport.deserializeUser((obj, cb) =>{
  cb(null, obj);
});