const router = require('express').Router()
const fs = require('fs')


const json_tasks = fs.readFileSync('src/tasks.json','utf-8')
const tasks = JSON.parse(json_tasks)

router.get('/', (req, res) => {
    res.render('index', {tasks})
})

router.get('/add', (req, res) => {
    res.render('addtask')
})

router.post('/add', (req, res) => {
    const {title, description} = req.body
    let newTask = {
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

router.get('/delete', (req, res) => {
    res.send('Delete task')
})

module.exports = router