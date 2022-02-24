const {Schema, model} = require('mongoose');


const UsuarioSchema = Schema({
    name: {
        type: String,
        required: true // SE;ALO Q SI O SI ES REQUERIDO
    },
    email: {
        type: String,
        required: true, 
        unique: true // SE;ALO Q NO PUEDEN HABER EMAILS REPETIDOS
    },
    password: {
        type: String,
        required: true
    }
})

module.exports = model('Usuario', UsuarioSchema)