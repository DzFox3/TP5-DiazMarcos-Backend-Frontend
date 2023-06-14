const Producto = require('../models/producto');
const productoCtrl = {}
//Dar de alta un producto
productoCtrl.createProducto = async (req, res) => {
    var producto = new Producto(req.body);
    try {
        await producto.save();
        res.status(200).json({
            'status': '1',
            'msg': 'Producto guardado.'})
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando operacion.'})
    }
}
//Mostrar todos los productos
productoCtrl.getProductos = async (req, res) => {
    let criteria = {}
    if(req.query.destacado != null && req.query.destacado != ""){
        criteria.destacado = req.query.destacado;
    }
    var producto = await Producto.find(criteria);
    res.json(producto);
}    
//Muestra producto por id
productoCtrl.getProducto = async (req, res) => {
    var producto = await Producto.findById(req.params.id);
    res.json(producto);
}  
//Eliminar un producto
productoCtrl.deleteProducto = async (req, res)=>{
    try {
        await Producto.deleteOne({_id: req.params.id});
        res.status(200).json({
            status: '1',
            msg: 'Producto Eliminado'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}
//Editar un producto
productoCtrl.editProducto = async (req, res) => {
    const vproducto = new Producto(req.body);
    try {
        await Producto.updateOne({_id: req.body._id}, vproducto);
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
module.exports = productoCtrl;