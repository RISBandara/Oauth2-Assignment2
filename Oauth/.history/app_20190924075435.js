const express = require('express');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const session = require('express-session');
const router = require('./routes/routes');
const setup = require('./config/setup');

// new express app.
var app = express();

// render EJS templates.
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.use(morgan('combined'));//HTTP request logger middleware for node.js
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));//arse incoming request bodies 
//Create a session 6000 milisecond
app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 6000 },resave: true, saveUninitialized: true }));

 
app.use(passport.initialize());// Initialize Passport
app.use(passport.session());// session.


// define routes.
app.use('/',router);

//define port
app.listen(process.env['PORT'] || 3000,()=>{
  console.log('Port is startd in 3000')
});
