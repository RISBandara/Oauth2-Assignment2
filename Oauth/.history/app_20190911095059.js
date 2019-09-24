const express = require('express');
const auth = require('./routes/auth-routes');

const app = express();

//set view engine
app.set('view engine','ejs');

//route google 
app.use('/auth',auth);

//create route
app.get('/',(req,res) =>{

    res.render('home.ejs');
});

//port
app.listen(3000,()=>{
    console.log('started in 3000');
})