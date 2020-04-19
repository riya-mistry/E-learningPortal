const express = require('express');
const app = express();
const adModuleRoutes = express.Router();


// Require AdUnit model in our routes module
let AdModule = require('../models/AdModule');


// Defined store route

adModuleRoutes.route('/add').post(function (req, res) {
  let adModule = new AdModule(req.body);
 
  
  adModule.save()
    .then(game => {
    res.status(200).json({'adUser': 'AdUser in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
   
    
});



// Defined get data(index or listing) route
adModuleRoutes.route('/').get(function (req, res) {
    AdModule.find(function (err, adModules){
    if(err){
      console.log(err);
    }
    else {
      res.json(adModules);
      console.log("modules read");
    }
  });
});



// Defined edit route
adModuleRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  AdModule.findById(id, function (err, adModule){
   
      res.json(adModule);
  })
});

//  Defined update route
adModuleRoutes.route('/update/:id').post(function (req, res) {
    AdModule.findById(req.params.id, function(err, adModule) {
    if (!adModule)
      return next(new Error('Could not load Document'));
    else {
        adModule.coursename = req.body.coursename;
        adModule.moduleno = req.body.moduleno;
        adModule.modulename = req.body.modulename;
        adModule.description = req.body.description;


        adModule.save().then(adModule => {
          res.json('Update complete of module');
         
      })
      .catch(err => {
            res.status(400).send("unable to update the database the module");
      });
    }
  });
});

// Defined delete | remove | destroy route
adModuleRoutes.route('/delete/:id').get(function (req, res) {
    AdModule.findByIdAndRemove({_id: req.params.id}, function(err, adModule){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
  
});

adModuleRoutes.route('/mycourses/:course').get(function(req,res){
  //var query = {author:req.param.author};
  console.log(req.params.course);
  
  AdModule.find({coursename:req.params.course},function(err,adCourse){
    if(err) res.json(err);
    else {res.json(adCourse);
    
    }
  });
});
module.exports = adModuleRoutes;