const {Router} = require("express");
const {Transaccion} = require('../models/index')
const {consutaTransacciones, agregarTransacciones} = require("../controller/transacciones")
const router = Router();

router.get('/',(consutaTransacciones));

router.post('/',(agregarTransacciones));

router.put('/',( req, res, next)=>{
    res.send("Soy la ruta de transacciones")

});
router.delete('/',( req, res, next)=>{
    res.send("Soy la ruta de transacciones")

});

module.exports = router;