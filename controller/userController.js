const userModel = require("../model/user/userModel")
const bcrypt = require("bcrypt")
exports.creatUser = async function(req,res){
        try {
        let checkUser = await userModel.findOne({userName:req.body.userName})
        if(checkUser){
            res.status(400).json({mess:"user da ton tai"})
        }
        else{
            let password = await bcrypt.hash(req.body.password,10)         
         let data =   await userModel.create({
                userName:req.body.userName,
                password
            })
            res.status(200).json({data})
        }
          
        } catch (error) {
          
           res.status(400).json({error})
        }
}

exports.getUser = async function(req,res){
    try {
       let data = await userModel.find()
        res.status(200).json({data})

    } catch (error) {
        res.status(500).json({error})
    }
}

exports.Login = async function(req,res){

    try {
      let data = await userModel.findOne({userName:req.body.userName})
      if(data ){
          let checkPass = await bcrypt.compare(req.body.password,data.password)
        if(checkPass){
            res.status(200).json({data})
        }
        else{
            res.status(400).json({mess:"password wrong"})
        }
      }
      else{
        res.status(400).json({mess:"id khong ton tai"})
      }
    } catch (error) {
        res.status(500).json({mess:" wrong"})
    }
}