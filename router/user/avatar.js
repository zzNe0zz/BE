const express = require("express")
const router = express.Router()
const multer  = require('multer')
const path = require("path")

const { uploadFile,getImg} = require("../../controller/userController")
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './upload')
    },
    filename: function (req, file, cb) {
        let ext = path.extname(file.originalname);
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix+ext)
    }
  })
  
  const upload = multer({ storage: storage })

  router.get("/getImg",getImg)
  router.post("/upload",upload.single('uploaded'),uploadFile)

  module.exports = router