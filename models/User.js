const mongoose = require("mongoose")

const userschama = mongoose.Schema({
name:{
    type:String,
    required: true
},
email:{
    type:String,
    required: true,
     unique: true
},
role:{
    type:String,
    enum:['admin', 'user', 'auther'],
    default: 'user'
},
password:{
    type:String,
    required: true,

},
createdAt: {
        type:Date,
        default:Date.now
    }


})

const User = mongoose.model("USER", userschama)
module.exports = User;