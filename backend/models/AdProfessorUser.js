const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let AdProfessorUser = new Schema({
    name:{
        type:String
    },
    username:{
        type:String
    },
    password:{
        type:String
    },
    profession:{
        type:String
    },
    expertise:{
        type:String
    },
    collegename:{
        type:String
        
    },
    experience:{
        type:String
    },
    contact:{
        type:Number
    },
    email:{
        type:String
    },
    accountnumber:{
        type:String
    },
    linkedinprofile:{
        type:String
    }

});
module.exports = mongoose.model('AdProfessorUser',AdProfessorUser);