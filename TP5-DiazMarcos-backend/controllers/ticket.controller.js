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
        await Ticket.updateOne({_id: req.params._id}, vticket);
        res.status(200).json({
            'status': '1',
            'msg': 'Producto Actualizado'
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
    var ticket = await Ticket.find({
        categoriaEspectador: req.params.categoriaEspectador
    }).populate("espectador");
    res.json(ticket);
} 
module.exports = ticketCtrl;