const express = require('express');
const app = express();

const adProfessorUserRoutes = express.Router();

let AdProfessorUser = require('../models/AdProfessorUser');
// Defined store route
adProfessorUserRoutes.route('/add').post(function (req, res) {
  let adProfessorUser = new AdProfessorUser(req.body);
  adProfessorUser.save()
    .then(game => {
    res.status(200).json({'adProfessorUser': 'professor in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});
//login authentication
/*adProfessorUserRoutes.route('/login').get(function (req, res) {
  AdProfessorUser.find(function (err, adProfessorUsers){
  if(err){
    console.log(err);
  }
  else {
    arr:any=[];
    obj:Object;
     for(i=0;i<adUsers.length;i++){
       obj.username = adProfessorUsers[i].name;
       obj.password = adProfessorUsers[i].password;
      arr.push(obj);
     }
  
    res.json(adProfessorUsers);
  }
});
});
*/

// Defined get data(index or listing) route
adProfessorUserRoutes.route('/').get(function (req, res) {
    AdProfessorUser.find(function (err, adProfessorUsers){
    if(err){
      console.log(err);
    }
    else {
      res.json(adProfessorUsers);
    }
  });
});

// Defined edit route
adProfessorUserRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  AdProfessorUser.findById(id, function (err, adUnit){
      res.json(adUnit);
  });
});

//  Defined update route
adProfessorUserRoutes.route('/update/:id').post(function (req, res) {
    AdProfessorUser.findById(req.params.id, function(err, adProfessorUser) {
    if (!adProfessorUser)
      return next(new Error('Could not load Document'));
    else {
        adProfessorUser.name = req.body.name;
        adProfessorUser.username = req.body.usernamename;
        adProfessorUser.profession = req.body.profession;
        adProfessorUser.email = req.body.email;
        adProfessorUser.password = req.body.password;
        adProfessorUser.expertise = req.body.expertise;
        adProfessorUser.account =req.body.account;
        adProfessorUser.contact = req.body.contact;
        adProfessorUser.college = req.body.college;
        adProfessorUser.linkedin = req.body.linkedin;
        


        adProfessorUser.save().then(adProfessorUser => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
adProfessorUserRoutes.route('/delete/:id').get(function (req, res) {
    AdProfessorUser.findByIdAndRemove({_id: req.params.id}, function(err, adProfessorUser){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});
adProfessorUserRoutes.route('/byusername/:name').get(function(req,res){
  AdProfessorUser.find({'username':req.params.name},function(err,adProfessorUser){
    if(err) res.json(err);
    else res.json(adProfessorUser);
  })
})

adProfessorUserRoutes.route('/login/:username/:password').get(function(req,res){
  AdProfessorUser.find({'username':req.params.username,'password':req.params.password},function(err,adUsers){
      if(err) res.json({'found':'0'});
      else{
        
        res.json(adUsers);
      }
  })
})

module.exports = adProfessorUserRoutes;