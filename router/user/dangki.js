const express = require("express")
const router = express.Router()
const path = require("path")
const multer  = require('multer')
const {creatUser,getUser,Login, } = require("../../controller/userController")

//   const upload = multer({ dest: 'uploads/' })
router.post("/creatUser",creatUser)
router.get("/getUser",getUser)
router.post("/login",Login)

module.exports = router