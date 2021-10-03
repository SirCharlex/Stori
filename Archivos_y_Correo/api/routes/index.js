//Traer mis rutas emitidas desde el front
const {Router} = require("express");

const TransaccionesRuta = require('./transacciones.js');
const CorreoRuta = require('./correo.js');

const router = Router();
router.use('/transacciones', TransaccionesRuta);
router.use('/correo', CorreoRuta);


module.exports = router;