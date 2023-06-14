//defino controlador para el manejo de CRUD
const tranCtrl = require('./../controllers/transaccion.controller');
//creamos el manejador de rutas
const express = require('express');
const router = express.Router();
//definimos las rutas para la gestion de agente
router.post('/', tranCtrl.createTransaccion);
router.get('/', tranCtrl.getTransacciones);
router.get('/cliente', tranCtrl.getHistorico);
//exportamos el modulo de rutas
module.exports = router;