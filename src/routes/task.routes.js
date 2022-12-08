const express = require('express')

//Devuelve un objeto en el cual poder ingresar rutas
const router = express.Router()

//Cuando se ingrese a esta dirección, mandará con req a la base de datos o reqresará con res
//para mostrarlo en pantalla.
router.get('/', (req, res) => {
    res.json({
        status: 'API works'
    })
})

module.exports = router