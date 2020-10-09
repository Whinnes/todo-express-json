const router = require('express').Router()
const fs = require('fs')
const {v4:uuidv4} = require('uuid')


const json_tasks = fs.readFileSync('src/tasks.json','utf-8')
let tasks = JSON.parse(json_tasks)

router.get('/', (req, res) => {
    res.render('index', {tasks})
})

router.get('/add', (req, res) => {
    res.render('addtask')
})

router.post('/add', (req, res) => {
    const {title, description} = req.body
    let newTask = {
        id: uuidv4(),
        title,
        description
    }
    tasks.push(newTask)
    const json_tasks = JSON.stringify(tasks)
    fs.writeFileSync('src/tasks.json', json_tasks, 'utf-8')
    console.log(req.body)
    res.render('index.ejs', {
        tasks
    })
})

router.get('/delete/:id', (req, res) => {
    tasks = tasks.filter(task => task.id != req.params.id)
    const json_tasks = JSON.stringify(tasks)
    fs.writeFileSync('src/tasks.json', json_tasks, 'utf-8')
    res.redirect('/')
})

router.get('/edit/:id', (req, res) => {
    const myTask = tasks.filter(task => task.id == req.params.id)
    let myTaskab = {
        id: myTask[0].id,
        title: myTask[0].title,
        description: myTask[0].description
    }
    res.render('edittask.ejs', {myTaskab})
})

router.post('/edit/:id', (req, res) => {
    const {id, title, description} = req.body
    let newTask = {
        id,
        title,
        description
    }

    tasks = tasks.filter(task => task.id != req.params.id)
    const json_tasks = JSON.stringify(tasks)
    fs.writeFileSync('src/tasks.json', json_tasks, 'utf-8')

    tasks.push(newTask)
    const json_tasksA = JSON.stringify(tasks)
    fs.writeFileSync('src/tasks.json', json_tasksA, 'utf-8')
    console.log(req.body)
    res.render('index.ejs', {
        tasks
    })
})


module.exports = router