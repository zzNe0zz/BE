const express = require("express")
const app = express()
const path = require("path")
const cors = require("cors")
const userRouter = require("./router/user/dangki")
const avatarRouter = require("./router/user/avatar")

app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use("/upload",express.static(path.join(__dirname,"./upload"))) // public file
app.use("/user",userRouter)
app.use("/avatar",avatarRouter)
app.listen(4001)