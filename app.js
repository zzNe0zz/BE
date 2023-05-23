const express = require("express")
const app = express()
const path = require("path")
const cors = require("cors")
const userRouter = require("./router/user/dangki")

app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use("/user",userRouter)
app.listen(4001)