const express = require('express');
const app = express();
const fs = require('fs');
const formidable = require('formidable');
const adCourseRoutes = express.Router();

let AdCourse = require('../models/AdCourse')




// Defined store route
adCourseRoutes.route('/add').post(function (req, res) {

  let adCourse = new AdCourse(req.body);
  
  adCourse.save()
    .then(game => {
    res.status(200).json({'adCourse': 'course in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
adCourseRoutes.route('/').get(function (req, res) {
    AdCourse.find({},function (err, adCourse){
    if(err){
      console.log(err);
    }
    else {
      
      res.json(adCourse);
      console.log("read courses");
    }
  });
});

// Defined edit route
adCourseRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  AdCourse.findById(id, function (err, adUnit){
      res.json(adUnit);
  });
});

//  Defined update route
adCourseRoutes.route('/update/:id').post(function (req, res) {
    AdCourse.findById(req.params.id, function(err, adCourse) {
    if (!adCourse)
      return next(new Error('Could not load Document'));
    else {
        adCourse.name = req.body.name;
        adCoure.category = req.body.category;
        adCourse.cost = req.body.cost;
        adCourse.description = req.body.description;
        adCourse.image = req.body.image;
        adCourse.author=req.body.author;


        adCourse.save().then(adCourse => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});
//display all cours


// Defined delete | remove | destroy route
adCourseRoutes.route('/delete/:id').get(function (req, res) {
    AdCourse.findByIdAndRemove({_id: req.params.id}, function(err, adCourse){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});
adCourseRoutes.route('/view/:name').get(function(req,res){
    AdCourse.find({name:req.params.name},function(err,adCourse){
      if (err) res.json(err);
      else res.json(adCourse);
    })
})
adCourseRoutes.route('/mycourses/:author').get(function(req,res){
  //var query = {author:req.param.author};
  console.log(req.params.author);
  let x = "riya123";
  AdCourse.find({author:req.params.author},{name:1,author:1},function(err,adCourse){
    if(err) res.json(err);
    else {res.json(adCourse);
    
    }
  });
});

module.exports = adCourseRoutes;