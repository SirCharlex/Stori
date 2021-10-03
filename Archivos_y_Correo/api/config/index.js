//Interaccion con nuestras variables de  entorno
require("dotenv").config();

module.exports = {
    dbUser: process.env.DB_USER || 'postgres',
    dbName: process.env.DB_NAME || 'stori',
    dbPort: process.env.DB_PORT || '5432',
    host: process.env.HOST || 'localhost',
    dbHost: process.env.DB_HOST || 'localhost',
    dbPassword: process.env.DB_PASSWORD || 'Carlos1234',
    PORT: process.env.PORT || 3001,
};