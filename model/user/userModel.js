const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/user")
const userSchema = mongoose.Schema({
    userName:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
    },
    age:Number,
    address: String,

})
const userModel = mongoose.model("user",userSchema)
module.exports = userModel