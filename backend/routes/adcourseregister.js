const express = require('express');
const app = express();
const adCourseRegisterRoutes = express.Router();
let AdCourseRegister = require('../models/AdCourseRegister');


adCourseRegisterRoutes.route('/add').post(function(req,res){
    let register = new AdCourseRegister(req.body);
    register.save().then(game =>
        {
            res.status(200).json({'courseregister':'registered succefully'});
        }).catch(err =>{
            res.status(400).send("unable to save to database");
        })
})

