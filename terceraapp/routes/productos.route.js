const { Router } = require('express');

const { obtenerProductos,crearProducto, actualizarProducto, eliminarProducto, obtenerProductoPorId, obtenerProductosPorPrecio,obtenerProductosPorCategoria, obtenerProductosPorNombre}  = require('../controllers/productos.controller');

const routerproducto = Router();

routerproducto.get('/', obtenerProductos);
routerproducto.post('/', crearProducto);
routerproducto.put('/:id', actualizarProducto);
routerproducto.delete('/:id', eliminarProducto);
routerproducto.get('/:id', obtenerProductoPorId);
routerproducto.get('/precio', obtenerProductosPorPrecio);
routerproducto.get('/categoria/:categoria', obtenerProductosPorCategoria);
routerproducto.get('/nombre/:nombre', obtenerProductosPorNombre);
module.exports = routerproducto;