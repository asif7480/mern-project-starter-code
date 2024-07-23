const express = require("express")
const connectDB = require("./config/db")
const errorHandler = require("./middlewares/errorMiddleware")
const dotenv = require("dotenv").config()

const app = express()
const port = process.env.port

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

connectDB()


app.use(errorHandler)
app.listen(port, () => console.log(`Server is running at port: ${port}`))
