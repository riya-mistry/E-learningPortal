const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let AdModule = new Schema({

    coursename:{
        type:String, ref:'AdCourse'
    },
    moduleno:{
        type:Number
    },
    modulename:{
        type:String
    },
   
    description:{
        type:String
    }

});
module.exports = mongoose.model('AdModule',AdModule);