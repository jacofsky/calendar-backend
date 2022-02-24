/*
    Rutas de Usuarios / Auth
    host + /api/auth
*/

const {Router} = require('express')
const { check } = require('express-validator')
const {validarCampos} = require('../middlewares/validar-campos')
const {crearUsuario, loginUsuario, renovarToken} = require('../controllers/auth')
const { validarJWT } = require('../middlewares/validar-jwt')

const router = Router()



router.post(
    '/new', 
    [
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe de por lo menos de 6 caracteres').isLength({min: 6}),
        validarCampos
    ], //Middelwares
    crearUsuario)

router.post(
    '/',
    [
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe de por lo menos de 6 caracteres').isLength({min: 6}),
        validarCampos
    ],
    loginUsuario)

router.get('/renew', validarJWT, renovarToken)



module.exports = router;