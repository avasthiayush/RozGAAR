const express = require('express')
const path = require('path')
const userRouter= require('./routers/user-router')
const jobRouter= require('./routers/job-router')

require('./db/database')

const app = express()
app.use(express.json())

const publicPath=path.join(__dirname,'../public')
app.use(express.static(publicPath))

const port = process.env.PORT || 3000

app.use(userRouter)
app.use(jobRouter)

app.listen(port,() =>{
    console.log('Server is up on',port)
})