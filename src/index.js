//Codigo del servidor
const express = require('express')
const app = express()

const morgan = require('morgan')

//Settings

//Servicio de la nube
app.set('port', process.env.PORT || 5173)

//Middleware
app.use(morgan('dev'))

//Cada que llegue un dato al servidor, llegará a esta función y si es formato JSON lo podremos utilizar en la app.
app.use(express.json())

//Routes
// '/api/tasks' es la ruta a la cual tiene que acceder para utilizar el segundo parámetro
app.use('/api/tasks', require('./routes/task.routes'))

//Static files
const path = require('path')
app.use(express.static(path.join(__dirname, 'public')))

//Starting server
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`)
})