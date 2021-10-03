const express = require('express');
const morgan = require('morgan');
const routes = require('./routes/index')
const errorHandler = require('./middleweres/errorhandler')
const setHeaders = require('./middleweres/setHeaders')
const app = express();
const {conn} = require('./models/index')
const {PORT} = require('./config/');
const path = require('path'); //Ayuda con la ubicación de los archivos

//setear headers
app.use(express.urlencoded({extended: true, limit: "50mb"}));
app.use(express.json({limit: "50mb"}))
app.use(morgan('dev')) //Manda mensaje a consola cada vez que hay un request
app.use(setHeaders);
// app.use((req, res, next)=>{
//     res.header("Access-Control-Allow-Origin", "http://localhost:3000");
//     res.header("Access-Control-Allow-Credentials", true);
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
//     next()
// })  
//setar rutas
app.use('/', routes)


//middleware de control de errores
app.use(errorHandler);
// app.use((err, req, res, next)=>{
//     const status = err.status || 500;
//     const message = err.message || err;
//     console.error(err);
//     return res.status(status).send(message);
// })

//Hacer nuestro server.listen
// app.get('/', (req, res)=>{
//     res.send('Servidor operando')
// });

conn.sync({force: true})
.then(()=>{
    console.log('Base de datos Conectada')
    app.listen(PORT,()=>{
        console.log(`El servidor está escuchando en el pueto ${PORT}`)
    })
})
