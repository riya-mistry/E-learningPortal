const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let AdFile = new Schema({
coursename:{
type:String,
ref:'AdCourse'
},
  modulename:{
      type:String,
      ref:'AdModule'
  }  ,
fileno:{
    type:Number
},
filename:{
    type:String
},
fileurl:{
    type:String
},
description:{
    type:String
}
});
module.exports = mongoose.model('AdFile',AdFile);


