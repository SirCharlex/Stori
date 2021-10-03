const {Transaccion} = require('../models/index')

function consutaTransacciones( req, res, next){
    return Transaccion.findAll().then((trans)=> res.send(trans));
    // res.send("Soy la ruta de transacciones")

};

function agregarTransacciones(req, res, next){
    const tran = req.body;
    return Transaccion.create(tran)
        .then((transac)=> res.send(transac))
        .catch((error)=> next(error));
    // res.send("Soy la ruta de transacciones")

};

module.exports = {
    consutaTransacciones,
    agregarTransacciones

};