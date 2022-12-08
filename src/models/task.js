//Modelo de tarea para usar en MongoDB
const mongoose = require('mongoose')

const { Schema } = mongoose

const TaskSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true}
})

/**
 * 'Task': Como voy a poder reutilizarlo dentro de la aplicación
 * TaskSchema: La estructura que utilizará
 */
module.exports = mongoose.model('Task', TaskSchema)