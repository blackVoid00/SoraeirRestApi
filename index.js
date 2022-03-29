const express = require('express');
const gpsRoute=require('./routes/gpsdata')
const mongoose = require('mongoose');
const app=express();
require('dotenv').config();

const PORT = process.env.PORT || 4000;
app.use(express.json());
app.use(express.urlencoded({ extended:true}));

app.use('/api/gpsdata',gpsRoute);
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