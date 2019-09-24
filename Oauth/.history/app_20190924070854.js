const express = require('express');
const passport = require('passport');
const Strategy = require('passport-facebook').Strategy;
const router = require('./routes/routes');


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


// Create a new Express application.
var app = express();

// Configure view engine to render EJS templates.
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// Use application-level middleware for common functionality, including
// logging, parsing, and session handling.
app.use(require('morgan')('combined'));
app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('express-session')({ secret: 'keyboard cat', cookie: { maxAge: 6000 },resave: true, saveUninitialized: true }));

// Initialize Passport and restore authentication state, if any, from the
// session.
app.use(passport.initialize());
app.use(passport.session());


// Define routes.
app.use('/',router);



app.listen(process.env['PORT'] || 3000,()=>{
  console.log('Port is startd in 3000')
});
