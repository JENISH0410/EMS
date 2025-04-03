import dotenv from 'dotenv'
dotenv.config() // Load environment variables from .env file

import express from 'express'
import authRouter from './routes/AuthRoutes.js'
import cors from 'cors'
import { connect } from 'mongoose'
import connectDB from './config/DbConfig.js'


const app = express()
const PORT = process.env.PORT || 5052

app.use(express.json()) // Middleware to parse JSON data
app.use(cors()) // Middleware to enable CORS for all routes
app.use(express.urlencoded({extended:true})) // Middleware to parse URL-encoded data

app.listen(PORT,()=>{
    connectDB() // Connect to MongoDB
    console.log(`App is running at PORT:${PORT}`)
})

// authentication route
app.use('/api/auth',authRouter)

app.get('/',(req,res)=>{
    console.log("ping check")
    return res.status(200).json({
        message: "Hello from server"
    })
})