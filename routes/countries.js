var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Country = require('../models/Country.js');

// list
router.get('/', function(req, res, next){
    Country.find(function(err, countries) {
        if (err) {
          console.log('Error');
          return next(err);
        }
       
       res.json(countries);
    });
});

// create
router.post('/', function(req, res, next){
   console.log(req.body);
   var country = new Country(req.body);
   country.save(function(err){
     if (err) return next(err);
     
     res.json(country);
   });
});

// update
router.put('/:id', function(req, res, next) {
    Country.findByIdAndUpdate(req.params.id, req.body, function(err, country) {
        if (err) return next(err);
        
        res.json(country);
    });
});

module.exports = router;