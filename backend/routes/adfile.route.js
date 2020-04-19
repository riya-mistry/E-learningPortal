const express = require('express');
const app = express();
const adFileRoutes = express.Router();


// Require AdUnit model in our routes module
let AdFile= require('../models/AdFile');


// Defined store route

adFileRoutes.route('/add').post(function (req, res) {
  let adFile = new AdFile(req.body);
 
  
  adFile.save()
    .then(game => {
    res.status(200).json({'adUser': 'AdUser in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
   
    
});



// Defined get data(index or listing) route
adFileRoutes.route('/').get(function (req, res) {
    AdFile.find(function (err, adFiles){
    if(err){
      console.log(err);
    }
    else {
      res.json(adFiles);
      console.log("file read");
    }
  });
});


// Defined edit route
adFileRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  AdFile.findById(id, function (err, adFile){
   
      res.json(adFile);
  })
});

//  Defined update route
adFileRoutes.route('/update/:id').post(function (req, res) {
    AdFile.findById(req.params.id, function(err, adFile) {
    if (!adFile)
      return next(new Error('Could not load Document'));
    else {
        adFile.coursename= req.body.coursename;
        adFile.modulename=req.body.modulename;
        adFile.fileno=req.body.fileno;
        adFile.filename=req.body.filename;
        adFile.fileurl=req.body.fileurl;
        adFile.description=req.body.description;



        adFile.save().then(adFile => {
          res.json('Update complete of file');
         
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
adFileRoutes.route('/delete/:id').get(function (req, res) {
    AdFile.findByIdAndRemove({_id: req.params.id}, function(err, adUser){
        if(err) res.json(err);
        else res.json('Successfully removed file');
    });
    
});
adFileRoutes.route('/getfiles/:modulename').get(function(req,res){
  AdFile.find({modulename:req.params.modulename},function(err,adFiles){
    if (err) res.json(err);
    else res.json(adFiles);
  }).sort({fileno:1});
})

adFileRoutes.route('/view/:name').get(function(req,res){
  AdFile.find({coursename:req.params.name},function(err,adFiles){
    if (err) res.json(err);
    else res.json(adFiles);
  });
})
module.exports = adFileRoutes;