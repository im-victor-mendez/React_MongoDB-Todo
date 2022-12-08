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

//Publicar/Enviar
router.post('/', async (req, res) => {
    const { title, description } = req.body
    const task = new Task({ title, description })
    await task.save()
    res.json({status: 'task save', content: task})
})

//Actualizar
router.put('/:id', async (req, res) => {
    const { title, description } = req.body

    const oldTask = await Task.findById(req.params.id)
    const newTask = { title, description }

    await Task.findByIdAndUpdate(req.params.id, newTask)

    res.json({status: 'Task updated', content: { oldTask, newTask }})
})

router.delete('/:id', async (req, res) => {
    const deletedTask = await Task.findById(req.params.id)
    await Task.findByIdAndRemove(req.params.id)

    res.json({ status: 'Task deleted', content: { deletedTask }})
})

module.exports = router