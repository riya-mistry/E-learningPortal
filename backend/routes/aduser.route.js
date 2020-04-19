const express = require('express');
const app = express();
const adUserRoutes = express.Router();


// Require AdUnit model in our routes module
let AdUser = require('../models/AdUser');
let login = require('../models/login');

// Defined store route

adUserRoutes.route('/add').post(function (req, res) {
  let adUser = new AdUser(req.body);
 
  
  adUser.save()
    .then(game => {
    res.status(200).json({'adUser': 'AdUser in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
   
    
});

adUserRoutes.route('/login/:username/:password').get(function(req,res){
  AdUser.find({'username':req.params.username,'password':req.params.password},function(err,adUsers){
      if(err) res.json({'found':'0'});
      else{
        
        res.json(adUsers);
      }
  })
})

// Defined get data(index or listing) route
adUserRoutes.route('/').get(function (req, res) {
    AdUser.find(function (err, adUsers){
    if(err){
      console.log(err);
    }
    else {
      res.json(adUsers);
      console.log("data read");
    }
  });
});

/*adUserRoutes.route('/login').get(function (req, res) {
  AdUser.find(function (err, adUsers){
  if(err){
    console.log(err);
  }
  else {
    arr:any=[];
  obj:Object;
  let x = json.stringfy(adUsers);
   for(i=0;i<x.length;i++){
     obj.username = x[i].name;
     obj.password = x[i].password;
    arr.push(obj);
   }

    res.json(arr);
  }
});
});
*/

// Defined edit route
adUserRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  AdUser.findById(id, function (err, adUser){
   
      res.json(adUser);
  })
});

//  Defined update route
adUserRoutes.route('/update/:id').post(function (req, res) {
    AdUser.findById(req.params.id, function(err, adUser) {
    if (!adUser)
      return next(new Error('Could not load Document'));
    else {
        adUser.name = req.body.name;
        adUser.username = req.body.username;
        adUser.email = req.body.email;
        adUser.password = req.body.password;
        adUser.address = req.body.address;
        adUser.degree = req.body.degree;
        adUser.school = req.body.school;


        adUser.save().then(adUser => {
          res.json('Update complete');
         
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
adUserRoutes.route('/delete/:id').get(function (req, res) {
    AdUser.findByIdAndRemove({_id: req.params.id}, function(err, adUser){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
    login.findByIdAndRemove({_id:req.param.id,function(err,login1){
      if(err) res.json(err);
      else res.json('successfully removed');
    }})
});
adUserRoutes.route('/display/:username').get(function(req,res){
  AdUser.find({'username':req.param.username},function(err,adUser){
    if(err) res.json(err);
    else res.json(AdUser);
  });
});
module.exports = adUserRoutes;