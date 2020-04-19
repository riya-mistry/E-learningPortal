const adUserRoutes = require('./routes/aduser.route');
const adProfessorRoutes = require('./routes/adprofessoruser.route');
const adCourse = require('./routes/adcourse.route');
const adFile = require('./routes/adfile.route');
const adModule = require('./routes/admodule.route');
let express = require('express'),
path = require('path'),
bodyParser = require('body-parser'),
cors = require('cors'),
mongoose = require('mongoose'),
config = require('./DB');

 mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://127.0.0.1:27017/register').then(
      () => {console.log('Database is connected') },
      err => { console.log('Can not connect to the database'+ err)}
    );
 const app = express();
	//app.use(bodyParser());
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }));
    app.use(cors());
    const port = process.env.PORT || 4000;
 	app.use('/adusers', adUserRoutes);
 	app.use('/adprofessorusers',adProfessorRoutes);
	app.use('/adcourses',adCourse);
	app.use('/adfiles',adFile);
	app.use('/admodules',adModule);

    const server = app.listen(port, function(){
     console.log('Listening on port ' + port);
    });














/*var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var register = require('./models/Register');
var app = express();
const router = express.Router();
app.use(cors());
app.use(bodyParser.json());
mongoose.connect(' mongodb://127.0.0.1:27017/register');
const connection=mongoose.connection;
connection.once('open',()=>{
console.log('mongodb database connection established successfully');	
});
router.route('/register').get((req,res)=>
	{Register.find((err,register)=>
	{if(err){
		console.log(err);
	}
	else
		res.json(register);
});

router.route('/register/:id').get((req,res)=>{
	Register.findById(req.param.id,(err,register)=>{
		if(err){
			console.log(err);}
			else
				res.json(register);
		
	});
});


router.route('/register/add').post((req,res)=>{
	let r = new Register(req.body);
	r.save()
	.then(r=>{
		res.status(200).json({'register':'Added successfully'});

	})
	.catch(err=>{res.status(400).send("failed");
});
});
router.route('/register/update/:id').post((req,res)=>{
Register.findById(req.param.id,(err,register)=>{
	if(!register)
		return next(new Error('could not load document'));
	else
	{	register.name = req.body.title;
		register.email = req.body.email;
		register.password = req.body.password;
		register.save().then(register=>{
			res.json('update done');
		}).catch(err=>{
			res.status(400).send("upadte failed");
		});
	}
});
});


app.use('/',router);

app.listen(4000);
 */

/*var express =require ('express');
var bodyParser = require('body-parser');
var mongoose = require("mongoose");
var register = require('./models/Register');
var cors = require("cors");
 const app = express();
 const router = express.Router();
 app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/register');
const connection=mongoose.connection;
connection.once('open',()=>{
console.log('mongodb database connection established successfully');	
});

router.route('/register').get((req,res)=>{
 			

	register.find((err,reg)=>{
		if(err){
			console.log(err);}
			else
				res.json(reg);
		
	});
});

router.route('/register/:id').get((req,res)=>{
	register.findById({_id:req.param.id},(err,reg)=>{
		if(err){
			console.log(err);}
			else
				res.json(reg);
		
	});
});
app.use('/',router);
 app.listen(4000,()=>{
 	console.log("lsitened successfully");
 })*/