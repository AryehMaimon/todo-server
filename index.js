const express = require('express')
const app = express()

 const db = require('./db')
 db.connect()

const cors = require('cors')

app.use(cors())
app.use(express.json())


//  const userRouter = require('./')
const missionRouter = require('./missionRouter')

// app.use('/user', userRouter)
app.use('/mission', missionRouter)

// console.log( new Date())

app.listen(2500,()=> console.log("***server is up***"))

