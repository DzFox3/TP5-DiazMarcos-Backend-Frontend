const express = require('express');
const cors = require('cors');
const {mongoose} = require('./database');
var app = express();
//middlewares
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));
//Cargamos el modulo de direccionamiento de rutas
//PUNTO1
app.use('/api/producto', require('./routes/producto.route.js'));
//PUNTO2
app.use('/api/transaccion', require('./routes/transaccion.route.js'));
//PUNTO3
app.use('/api/espectador', require('./routes/espectador.route.js'));
app.use('/api/ticket', require('./routes/ticket.route.js'));
//setting
app.set('port', process.env.PORT || 4000);
//starting the server
app.listen(app.get('port'), () => {
console.log(`Server started on port`, app.get('port'));
});