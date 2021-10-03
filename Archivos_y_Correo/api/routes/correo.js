const {Router} = require("express");
const router = Router();
var nodemailer = require('nodemailer');
const {EMAIL_PASS} = require('../config')

// const logoStori = require('../routes/logoStori.png')

router.get('/',( req, res, next)=>{
    console.log(req.body)
    res.send("Enviado")
});

router.post('/', ( req, res, next)=>{
    const {Email, Asunto, Mensaje} = req.body;

    contentHTLM= `
        <h1>Stori - Estado de cuenta</h1>
        <ul>
            <li>Email: ${Email}</li>
            <li>Asunto: ${Asunto}</li>
        </ul>
        <p>${Mensaje}</p>
    `
    var transporter = nodemailer.createTransport({
        host: "smtp-mail.outlook.com", // hostname
        secureConnection: false, // TLS requires secureConnection to be false
        port: 587, // port for secure SMTP
        auth: {
            user: 'correo@hotmail.com',
            pass: "clave"
        },
        tls: {
           ciphers:'SSLv3'
        }
    });
    
    // setup e-mail data, even with unicode symbols
    var mailOptions = {
        from:  "'Carlos Lozano' <caedlozano@hotmail.com>", // sender address (who sends)
        to: Email, // list of receivers (who receives)
        subject: Asunto, // Subject line
        html: contentHTLM,
        attachments: [{
            filename: 'logoStori.png',
            path: 'routes/logoStori.png',
            cid: 'routes/logoStori.png' //same cid value as in the html img src
        }]
    };
    
    // send mail with defined transport object
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            return console.log(error);
        }
    
        console.log('Message sent: ' + info.response);
    });

    // const info = await transporter.sendMail({
    //     from:
    //     to: ,
    //     subject: "prueba de envio",
    //     text: "Prueba d envio"
    // })

    // console.log("message send", info.messageId)
    // console.log(contentHTLM)
    // console.log(req.body)
    // res.send("Soy la ruta de correo")

});

module.exports = router;