const express = require('express')
const path = require('path')

//Init
const app = express()

//Settings
app.set(express.json())
app.set(express.urlencoded({extended: false}))

//Static Files
app.set('public', path.join(__dirname, 'public'))

//Routes
app.use(require('./routes/tasks.routes'))

module.exports = app