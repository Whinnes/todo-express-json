const router = require('express').Router()

router.get('/',(req,res)=>{
    res.send('Home page')
})

router.get('/add',(req,res)=>{
    res.send('Add task')
})

router.get('/delete',(req,res)=>{
    res.send('Delete task')
})

module.exports = router