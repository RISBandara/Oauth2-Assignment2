const express = require('express');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const session = require('express-session');
const Strategy = require('passport-facebook').Strategy;
const router = require('./routes/routes');
const setup = require('./config/setup');

// new express app.
var app = express();

// render EJS templates.
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// Use application-level middleware for common functionality, including
// logging, parsing, and session handling.
app.use(morgan('combined'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 6000 },resave: true, saveUninitialized: true }));

// Initialize Passport and restore authentication state, if any, from the
// session.
app.use(passport.initialize());
app.use(passport.session());


// Define routes.
app.use('/',router);

app.listen(process.env['PORT'] || 3000,()=>{
  console.log('Port is startd in 3000')
});
