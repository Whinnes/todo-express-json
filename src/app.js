const express = require('express')
const path = require('path')
const morgan = require('morgan')
const bodyParser = require('body-parser')

//Init
const app = express()

//Settings
app.set(bodyParser.urlencoded({extended: false}))
app.set(bodyParser.json())
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', '.ejs')

//Middlewares
app.use(morgan('dev'))


//Static Files
app.set('public', path.join(__dirname, 'public'))

//Routes
app.use(require('./routes/tasks.routes'))

module.exports = app