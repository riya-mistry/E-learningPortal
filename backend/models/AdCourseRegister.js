const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let AdCourseRegister =  new Schema({

    userid:{
        type:ObjectId,
        ref: 'AdUser'
    },
    username: {
        type:String,
        ref:'AdUser'
    },
    coursename:{
        type:String,
        ref:'AdCourse'
    },
    completed:{
        type:Boolean
    }
    
});
module.exports = mongoose.model('AdCourseRegister',AdCourseRegister)