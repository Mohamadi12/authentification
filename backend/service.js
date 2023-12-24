const express=require('express')
const app=express()
const cors=require('cors')
require('dotenv').config()
const connect = require('./config/connectDB')
const controllerRoute = require('./routes/routesController')
const Port= process.env.port||5001

app.use(cors())
app.use(express.json())
app.use('/auth',controllerRoute)
connect()








app.listen(Port,(err)=>{
    err?console.log(err):console.log(`Yes,successfull ${Port}`)
})