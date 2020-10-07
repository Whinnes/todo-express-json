const router = require('express').Router()
const fs = require('fs')

let tasks = []

router.get('/',(req,res)=>{
    res.render('index')
})

router.get('/add',(req,res)=>{
    res.render('addtask')
})

router.post('/add',(req,res)=>{
    console.log(req.body)
    res.send('Task received')

})

router.get('/delete',(req,res)=>{
    res.send('Delete task')
})

module.exports = router