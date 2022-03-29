const mongoose = require('mongoose');
// create a schema for my DB collection
const GpsdataSchema = new mongoose.Schema({
    longitude:{
        type:String,
        required:true
    },
    latitude:{
        type:String,
        required:true
    },
    altitude:{
        type:String,
        required:true
    },
    speed:{
        type:String,
        required:true
    }
})
module.exports= new mongoose.model('GPS',GpsdataSchema)