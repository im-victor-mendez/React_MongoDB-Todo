const express = require('express')

//Devuelve un objeto en el cual poder ingresar rutas
const router = express.Router()

const Task = require('../models/task')

//Cuando se ingrese a esta dirección, mandará con req a la base de datos o reqresará con res
//para mostrarlo en pantalla.
router.get('/', async (req, res) => {
    const tasks = await Task.find()
    res.json(tasks)
})

router.post('/', async (req, res) => {
    const { title, description } = req.body
    const task = new Task({ title, description })
    await task.save()
    res.json({status: 'task save', content: task})
})

module.exports = router