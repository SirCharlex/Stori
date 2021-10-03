//funciones para crear modelos
const {DataTypes} = require('sequelize')

module.exports = function(sequelize){
    return sequelize.define("transacciones", {
        Id:{
            type: DataTypes.STRING,
            // allowNull: false
        },
        Date:{
            type: DataTypes.STRING,
            // allowNull: false
        },
        Month:{
            type: DataTypes.STRING,
            // allowNull: false
        },
        Transaction:{
            type: DataTypes.DOUBLE,
            // allowNull: false
        },
        Email:{
            type: DataTypes.STRING,
            // allowNull: false
        },
        Asunto:{
            type: DataTypes.STRING,
            // allowNull: false
        },
    });
};