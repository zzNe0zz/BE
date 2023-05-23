const express = require("express")
const router = express.Router()
const path = require("path")
const {creatUser,getUser,Login} = require("../../controller/userController")

router.post("/creatUser",creatUser)
router.get("/getUser",getUser)
router.post("/login",Login)
module.exports = router