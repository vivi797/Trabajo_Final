const { response } = require('express');
// Ejemplo de función para obtener todos los productos
const obtenerProductos = (req, res = response) => {
    try {
        // Por ahora, simularemos una lista de productos ficticia
        const productos = [
            { id: 1, nombre: 'Producto 1', precio: 10.99, categoria: 'electrónica' },
            { id: 2, nombre: 'Producto 2', precio: 20.99, categoria: 'hogar' },
            { id: 3, nombre: 'Producto 3', precio: 30.99, categoria: 'educacion' }
        ];

        // Devolvemos la lista de productos en formato JSON
        res.json({
            ok: true,
            productos
        });
    } catch (error) {
        console.error('Error al obtener los productos:', error);
        // Si hay un error, devolvemos un mensaje de error en la respuesta
        res.status(500).json({
            ok: false,
            mensaje: 'Error al obtener los productos'
        });
    }
};
/*-------------------------------------------------------------------------------*/
// Función para crear un nuevo producto
const crearProducto = (req, res = response) => {
    try {
        const nuevoProducto = req.body; // Ejemplo: { nombre: 'Nuevo Producto', precio: 99.99 }

        // Lógica para guardar el nuevo producto en la base de datos

        res.status(201).json({
            ok: true,
            mensaje: 'Producto creado correctamente',
            producto: nuevoProducto
        });
    } catch (error) {
        console.error('Error al crear el producto:', error);
        res.status(500).json({
            ok: false,
            mensaje: 'Error al crear el producto'
        });
    }
};
/*-------------------------------------------------------------------------------*/

// Función para actualizar un producto existente
const actualizarProducto = (req, res = response) => {
    try {
        const idProducto = req.params.id;
        const datosActualizados = req.body;


        // Simulación de actualización exitosa
        const productoActualizado = {
            id: idProducto,
            ...datosActualizados
        };

        // Devolvemos una respuesta con el producto actualizado
        res.json({
            ok: true,
            mensaje: 'Producto actualizado correctamente',
            producto: productoActualizado
        });
    } catch (error) {
        console.error('Error al actualizar el producto:', error);
        res.status(500).json({
            ok: false,
            mensaje: 'Error al actualizar el producto'
        });
    }
};
/*-------------------------------------------------------------------------------*/

// Función para eliminar un producto existente
const eliminarProducto = (req, res = response) => {
    try {
        const idProducto = req.params.id;

        // Simulación de eliminación exitosa
        // Devolvemos una respuesta con el ID del producto eliminado
        res.json({
            ok: true,
            mensaje: 'Producto eliminado correctamente',
            producto: { id: idProducto }
        });
    } catch (error) {
        console.error('Error al eliminar el producto:', error);
        res.status(500).json({
            ok: false,
            mensaje: 'Error al eliminar el producto'
        });
    }
};

/*-------------------------------------------------------------------------------*/


// Función para obtener un solo producto por su ID
const obtenerProductoPorId = (req, res = response) => {
    try {
        const idProducto = req.params.id;

        // Simulación de producto encontrado
        const productoEncontrado = {
            id: idProducto,
            nombre: 'Producto encontrado',
            precio: 99.99,
            categoria: 'ejemplo'
        };

        res.json({
            ok: true,
            producto: productoEncontrado
        });
    } catch (error) {
        console.error('Error al obtener el producto por ID:', error);
        res.status(500).json({
            ok: false,
            mensaje: 'Error al obtener el producto por ID'
        });
    }
};
/*-------------------------------------------------------------------------------*/
// Función para obtener productos por precio
const obtenerProductosPorPrecio = (req, res = response) => {
    try {
        const precioMinimo = req.query.precioMin;
        const precioMaximo = req.query.precioMax;


        // Simulación de productos dentro del rango de precios
        const productosEncontrados = [
            { id: 1, nombre: 'Producto 1', precio: 10.99, categoria: 'electrónica' },
            { id: 2, nombre: 'Producto 2', precio: 20.99, categoria: 'hogar' },
            { id: 3, nombre: 'Producto 3', precio: 30.99, categoria: 'educacion' }
        ];

        res.json({
            ok: true,
            productos: productosEncontrados
        });
    } catch (error) {
        console.error('Error al obtener productos por precio:', error);
        res.status(500).json({
            ok: false,
            mensaje: 'Error al obtener productos por precio'
        });
    }
};


/*-------------------------------------------------------------------------------*/
const obtenerProductosPorCategoria = async (req, res = response) => {
    try {
        const categoria = req.params.categoria;

        // Por ahora, simularemos una lista de productos ficticia para la categoría especificada
        const productosEncontrados = [
            { id: 1, nombre: 'Producto 1', precio: 10.99, categoria: 'electrónica' },
            { id: 2, nombre: 'Producto 2', precio: 20.99, categoria: 'hogar' },
            { id: 3, nombre: 'Producto 3', precio: 30.99, categoria: 'educacion' }
        ];

        res.json({
            ok: true,
            productos: productosEncontrados
        });
    } catch (error) {
        console.error('Error al obtener productos por categoría:', error);
        res.status(500).json({
            ok: false,
            mensaje: 'Error al obtener productos por categoría'
        });
    }
};
/*-------------------------------------------------------------------------------*/

const obtenerProductosPorNombre = async (req, res = response) => {
    try {
        const nombreProducto = req.params.nombre;

        // Por ahora, simularemos una lista de productos ficticia para el nombre especificado
        const productosEncontrados = [
            { id: 1, nombre: 'Producto 1', precio: 10.99, categoria: 'electrónica' },
            { id: 2, nombre: 'Producto 2', precio: 20.99, categoria: 'hogar' },
            { id: 3, nombre: 'Producto 3', precio: 30.99, categoria: 'educacion' }
        ];

        res.json({
            ok: true,
            productos: productosEncontrados
        });
    } catch (error) {
        console.error('Error al obtener productos por nombre:', error);
        res.status(500).json({
            ok: false,
            mensaje: 'Error al obtener productos por nombre'
        });
    }
};

    
/* -------------------------------------------------------------------------------------------------------*/
module.exports = {
    obtenerProductos,
    crearProducto,
    actualizarProducto,
    eliminarProducto,
     obtenerProductoPorId,
    obtenerProductosPorPrecio,
    obtenerProductosPorCategoria,
    obtenerProductosPorNombre,
};


/*-------------------------------------------------------------------------------*/

