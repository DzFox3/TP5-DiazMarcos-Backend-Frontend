const Transaccion = require('../models/transaccion');
const tranCtrl = {}
//Dar de alta una transaccion
tranCtrl.createTransaccion = async (req, res) => {
    var transaccion = new Transaccion(req.body);
    try {
        await transaccion.save();
        res.status(200).json({
            'status': '1',
            'msg': 'Transaccion resgistrada.'})
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando operacion.'})
    }
}
//Mostrar todos las transacciones // criteria para buscar por parametros de moneda
tranCtrl.getTransacciones = async (req, res) => {
    let criteria = {}
    if(req.query.monedaOrigen != null && req.query.monedaDestino != null && req.query.monedaOrigen != "" && req.query.monedaDestino != ""){
        criteria.monedaOrigen = req.query.monedaOrigen;
        criteria.monedaDestino = req.query.monedaDestino;
    }
    const transaccion = await Transaccion.find(criteria);
    res.json(transaccion);
} 
//Mostrar historico de transaccion
tranCtrl.getHistorico = async (req, res) => {
    let criteria = {}
    if(req.query.emailCliente != null && req.query.emailCliente != ""){
        criteria.emailCliente = req.query.emailCliente;
    }
    const transaccion = await Transaccion.find(criteria);
    res.json(transaccion);
}
module.exports = tranCtrl;