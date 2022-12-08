//Codigo del servidor
const express = require('express')
const app = express()

//Settings

//Servicio de la nube
app.set('port', process.env.PORT || 5173)

//Middleware

//Routes

//Static files

//Starting server
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`)
})