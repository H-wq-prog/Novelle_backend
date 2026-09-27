const express = require("express")
const { Signup, Login} = require("../controllers/conAuth")

const rout = express.Router()


rout.post("/Signup", Signup)
rout.post("/Login", Login)



module.exports = rout