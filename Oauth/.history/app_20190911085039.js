const express = require('express');

const app = express();

//set view engine
app.set('view engine','ejs');

//create route
app.get('/',(req,res) =>{

    res.render('view/home.ejs');
});

//port
app.listen(3000,()=>{
    console.log('started in 3000');
})