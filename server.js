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


const port = process.env.PORT || 4700
app.listen(port, () => {
    console.log(`scssful run server in PORT ${port}`)
})
