const Ticket = require('../models/ticket');
const ticketCtrl = {}
//Dar de alta una ticket
ticketCtrl.createTicket = async (req, res) => {
    var ticket = new Ticket(req.body);
    try {
        await ticket.save();
        res.status(200).json({
            'status': '1',
            'msg': 'Transaccion resgistrada.'})
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando operacion.'})
    }
}
//Mostrar todos las transacciones
ticketCtrl.getTickets = async (req, res) => {
    var ticket = await Ticket.find().populate("espectador");
    res.json(ticket);
} 
ticketCtrl.getTicket = async (req, res) => {
    var ticket = await Ticket.findById(req.params.id).populate("espectador");
    res.json(ticket);
}
//Eliminar un ticket
ticketCtrl.deleteTicket = async (req, res)=>{
    try {
        await Ticket.deleteOne({_id: req.params.id});
        res.status(200).json({
            status: '1',
            msg: 'Ticket Eliminado'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}
//Editar un ticket
ticketCtrl.editTicket = async (req, res) => {
    const vticket = new Ticket(req.body);
    try {
        await Ticket.updateOne({_id: req.body._id}, vticket);
        res.json({
            'status': '1',
            'msg': 'Ticket Actualizado'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
} 
//Mostrar tickets de categoria
ticketCtrl.getTicketsCat = async (req, res) => {
    let criteria = {}
    if(req.query.categoriaEspectador != null && req.query.categoriaEspectador != ""){
        criteria.categoriaEspectador = req.query.categoriaEspectador;
    }
    var ticket = await Ticket.find(criteria).populate("espectador");
    res.json(ticket);
} 
module.exports = ticketCtrl;