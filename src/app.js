const express = require('express')
const path = require('path')
const morgan = require('morgan')

//Init
const app = express()

//Settings
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')


//Middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))

//Routes
app.use(require('./routes/tasks.routes'))

//Static Files
app.use(express.static(path.join(__dirname, 'public')))

module.exports = app