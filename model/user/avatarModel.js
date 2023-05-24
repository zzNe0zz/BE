const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/user")

const imgSchema = mongoose.Schema({
    url:{
        type:String,
        require:true,
    }
})

 const imgModel = mongoose.model("avatar",imgSchema)
 module.exports = imgModel
