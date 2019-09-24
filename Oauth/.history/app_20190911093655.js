const express = require('express');
const auth = require('./routes/auth-routes');

const app = express();

app.use('/auth',auth);

//set view engine
app.set('view engine','ejs');

//create route
app.get('/',(req,res) =>{

    res.render('home.ejs');
});

//port
app.listen(3000,()=>{
    console.log('started in 3000');
})