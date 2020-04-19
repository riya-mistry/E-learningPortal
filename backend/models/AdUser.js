const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let AdUser = new Schema({
	name : {
		type:String
	},
	username:{
		type: String
	},
	email:{
		type : String
	},
	password:{
		type:String
	},
	address:{
		type:String
	},
	degree : {
		type:String
	},
	school:{
		type:String
	}
});
module.exports = mongoose.model('AdUser',AdUser);