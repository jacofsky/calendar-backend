const express = require('express')
require('dotenv').config()
const cors = require('cors')
const {dbConnection} = require('./database/config')


// Creacion servidor express
const app = express()

// Base de datos
dbConnection()

// CORS
app.use(cors())

// Directorio publico
app.use(express.static('public')) // use ==> midelware

// Lectura y parsedo del body
app.use(express.json())

// Rutas
app.use('/api/auth', require('./routes/auth'))
app.use('/api/events', require('./routes/events'))




// Escuchar la peticion
app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`)
})


