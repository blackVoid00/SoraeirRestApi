const express = require('express');

const mongoose = require('mongoose');

const app=express();
require('dotenv').config();
const PORT = process.env.PORT || 4000;

mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true}).then(() =>{
    console.log('Connected to mongodb atlas');
}).catch(err => {
    console.error('Error connecting to mongodb',error)
});
//error handler
app.use(function(err,req, res, next) {
    res.status(422).send({error:err.message});
})

//listen for requests 

app.listen(PORT,function(){ 
    console.log("Started at port " , PORT);    
});