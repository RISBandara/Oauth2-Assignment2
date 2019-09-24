var express = require('express');
var passport = require('passport');
var Strategy = require('passport-facebook').Strategy;


passport.use(new Strategy({
    clientID: '641226966364464',
    clientSecret: 'd6112820740e1cf969cdc74f516f7aa6',
    callbackURL: '/return',
    profileFields: ['id', 'displayName', 'emails', 'photos']
  },
  function(accessToken, refreshToken, profile, cb) {
    
    return cb(null, profile);
  }));

//serialize and deserialized.
passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
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
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));

// Initialize Passport and restore authentication state, if any, from the
// session.
app.use(passport.initialize());
app.use(passport.session());


// Define routes.
app.get('/',
  function(req, res) {
    res.render('home', { user: req.user });
  });

app.get('/login',
  function(req, res){
    res.render('login');
    
  });
app.get('/logout',(req,res)=>{

  req.logout();
  res.redirect('/');
})

app.get('/login/facebook',
  passport.authenticate('facebook'));

app.get('/return', 
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');

  });

app.get('/profile',
  require('connect-ensure-login').ensureLoggedIn(),
  function(req, res){
    res.render('profile', { user: req.user });
    
  });

app.listen(process.env['PORT'] || 3000,()=>{
  console.log('Port is startd in 3000')
});
