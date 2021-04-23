const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const bodyParser = require('body-parser');
const cors = require('cors');

//crear el servidor
const app = express();

//Opciones cors restringir peticiones desde un dominio
const whitelist = ['http://localhost:3000/'];
const corsOptions = {
    origin: (origin, callback) => {
        console.log(origin)
        const existe = whitelist.some(dominio => dominio === origin);
        if(exixte) {
            callback(null, true);
        } else {
            callback(new Error('No Permitido por CORS'));
        }
    }
}

//Habilitar cors
// app.use(cors(corsOptions));
app.use(cors());

//Conectar a mongodb
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/veterinaria', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

//Habilitar bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Habilitar routing
app.use('/', routes());

//puerto y arrancar el servidor
app.listen(4000, () => {
    console.log('Servidor funcionando')
});