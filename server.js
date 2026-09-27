require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const conctDB = require("./config/db")
const routUser = require('./routes/routAuth')
const app = express()



conctDB()

app.use(express.json())
app.use(cors())

app.use("/auth", routUser)

module.exports = app
