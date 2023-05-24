const userModel = require("../model/user/userModel")
const imgModel = require("../model/user/avatarModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const path = require("path")
const multer = require("multer")


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



exports.Login = async function(req,res){

    try {
      let data = await userModel.findOne({userName:req.body.userName})
      if(data ){
          let checkPass = await bcrypt.compare(req.body.password,data.password)
        if(checkPass){
            delete data._doc.password
            var token = jwt.sign({data}, 'shhhhh',{expiresIn:"1h"});
            res.status(200).json({token,data})
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
exports.getUser = async function(req,res){
    try {
        
       let data = await userModel.find()
        res.status(200).json({data})

    } catch (error) {
       
        res.status(500).json({error})
    }
}

exports.uploadFile = async function(req,res){
        try {
            if(req.file){
                let url = req.file.path
                let data =   await imgModel.create({url})
                    res.status(200).json({mess:"ok",data})
                } 
             else  res.status(400).json({error:"nhap file"})
    }
    catch (error) {
        console.log(error);
        res.status(500).json({error})
    }
//   
    // console.log(url);
    
}
exports.getImg = async function(req,res){
        try {
                let data = await imgModel.find()
                res.status(200).json({mess:"ok",data})
        } catch (error) {
            res.status(500).json({error})
        }
}