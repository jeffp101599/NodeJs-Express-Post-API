const express = require('express')
const {v4: uuid} = require('uuid')
const _ = require('lodash')
const cors = require('cors')
const bodyParser = require('body-parser')
const PostRoutes = require('./routes/Posts.js')
const dotenv = require('dotenv').config()
const connection = require('./backend/config/db')

const app = express()

connection()

app.use(bodyParser.json())
app.use('/posts', PostRoutes)

app.get('/', (req, res) => {
    res.send('API Server Running')
})

app.listen(process.env.PORT, () => {
    console.log(`Server Running at http://localhost:${process.env.PORT}`)    
})