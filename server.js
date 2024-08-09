require("dotenv").config()
const express = require("express")
const app = express()
const PORT = process.env.PORT 
const morgan = require("morgan")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const cors = require("cors")


app.use(cors())
app.use(bodyParser.json())
app.use(morgan("tiny"))
app.use("/api/v1", require("./Routes/router"))

mongoose.connect(process.env.mongoDB_URI)
.then(() => {
    console.log("Connected to database...")
})
.catch((err) => {
    console.error(err)
})

app.listen(PORT, (err) => {
    if (err) throw err
    console.log(`Server listening on ${PORT}`)
})