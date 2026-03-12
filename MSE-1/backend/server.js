require('dotenv').config()
const express = require('express')
const connectDB = require('./config/db')
const patientRoutes = require('./routes/patientRoutes')
const errorHandler = require('./middleware/errorMiddleware')

const app =express()
app.use(express.json())
connectDB()
app.use('/patients',patientRoutes)
app.use(errorHandler)
const PORT = process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})