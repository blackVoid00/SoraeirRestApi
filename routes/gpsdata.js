const express = require('express');
const Gps = require('../models/gpsdata');
const router = express.Router();
 

//get
router.get('/',function (req, res,next) {
    Gps.find({}).then(function (localisation) {
        res.send(localisation);
    })
    
});

//add
router.post('/',function (req, res,next) {
  Gps.create(req.body).then(function(Gps){
        res.send(Gps);
    }).catch(next);
  
   
});

//update
router.put('/:id',function (req, res,next) {
    Gps.findByIdAndUpdate({_id:req.params.id},req.body).then(function(Gps){
        Gps.findOne({_id:req.params.id}).then(function(gps){
            res.send();
        });
    });
});


//delete
router.delete('/:id',function (req, res,next) {
    Gps.findByIdAndRemove({_id:req.params.id}).then(function(Gps){
        res.send(Gps); 
    });
});


module.exports= router;
