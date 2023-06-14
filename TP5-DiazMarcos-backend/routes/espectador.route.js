//defino controlador para el manejo de CRUD
const especCtrl = require('./../controllers/espectador.controller');
//creamos el manejador de rutas
const express = require('express');
const router = express.Router();
//definimos las rutas para la gestion de agente
router.post('/', especCtrl.createEspectador);
router.get('/', especCtrl.getEspectadores);
router.get('/:dni', especCtrl.getEspectador);
//exportamos el modulo de rutas
module.exports = router;