/*
    Rutas de Usuarios / Events
    host + /api/event
*/

const { Router } = require("express");
const { check } = require("express-validator");
const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require("../controllers/events");
const { isDate } = require("../helpers/isDate");
const { validarCampos } = require("../middlewares/validar-campos");
const { validarJWT } = require("../middlewares/validar-jwt");

const router = Router()
router.use(validarJWT)

router.get('/', getEventos)

router.post(
    '/',
    [
        check('title', 'El titulo es obligatorio').not().isEmpty(),
        check('start', 'Fecha de inicio es obligatoria').custom(isDate),
        check('end', 'Fecha de finalizacion es obligatoria').custom(isDate),
        validarCampos
    ], 
    crearEvento)

router.put(
    '/:id', 
    [
        check('id','Id no valido').isMongoId(),
        validarCampos

    ],
    actualizarEvento)

router.delete(
    '/:id', 
    [
        check('id','Id no valido').isMongoId(),
        validarCampos

    ],
    eliminarEvento)


module.exports = router