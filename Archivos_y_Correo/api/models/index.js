//inicializamos sequilize y hacemosm las relaciones

const {Sequelize} = require('sequelize');
const {dbUser, dbName, dbPort,dbHost,dbPassword } = require("../config/index")
const construyeTransaccion = require('./transacciones') 

const sequelize = new Sequelize(`postgres://${dbUser}:${dbPassword}@${dbHost}/${dbName}`);

const Transaccion =  construyeTransaccion(sequelize)

//Acá construyo mis relaciones

    //En este caso no aplican relaciones

module.exports = {
    conn: sequelize,
    Transaccion,

}

//models se comunica con la base de datos
//las rutas son la puerta de entrada a nuestra aplicación
//El controlador es el intermediario entre nuestras rutas y nuestra base de datos 