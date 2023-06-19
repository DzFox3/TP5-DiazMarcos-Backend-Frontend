//defino controlador para el manejo de CRUD
const ticketCtrl = require('./../controllers/ticket.controller');
//creamos el manejador de rutas
const express = require('express');
const router = express.Router();
//definimos las rutas para la gestion de agente
router.post('/', ticketCtrl.createTicket);
router.get('/', ticketCtrl.getTickets);
router.get('/categoria', ticketCtrl.getTicketsCat);
router.get('/:id', ticketCtrl.getTicket);
router.delete('/:id', ticketCtrl.deleteTicket);
router.put('/:id', ticketCtrl.editTicket);
//exportamos el modulo de rutas
module.exports = router;