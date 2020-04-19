const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let AdCourse = new Schema({
	name : {
		type:String
	},
	category:{
		type:String
	},
    author:{
        type:String
    },
	cost:{
		type : Number
	},

	description:{
		type:String
	},
    image:{
        type:String
    }
});
module.exports = mongoose.model('AdCourse',AdCourse);