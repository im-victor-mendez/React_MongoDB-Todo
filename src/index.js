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

//Static files

//Starting server
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`)
})