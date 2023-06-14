const Espectador = require('../models/espectador');
const especCtrl = {}
//Dar de alta un espectador
especCtrl.createEspectador = async (req, res) => {
    var espectador = new Espectador(req.body);
    try {
        await espectador.save();
        res.status(200).json({
            'status': '1',
            'msg': 'Espectador guardado.'})
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando operacion.'})
    }
}
//Mostrar todos los espectadores
especCtrl.getEspectadores = async (req, res) => {
    var espectador = await Espectador.find();
    res.json(espectador);
}    
//Mostrar Unico espectador 
especCtrl.getEspectador = async (req, res) => {
    const espectador = await Espectador.find({dni: req.params.dni});
    res.json(espectador);
}
module.exports = especCtrl;