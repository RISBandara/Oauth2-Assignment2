const express = require('express');
const auth = require('./routes/auth-routes');
const passportConfig  = require('./config/passport-config')

const app = express();

//set view engine
app.set('view engine','ejs');

//route facebook 
app.use('/auth',auth);

//create route
app.get('/',(req,res) =>{

    res.render('home.ejs');
});

//port
app.listen(3000,()=>{
    console.log('started in 3000');
})