const request = require('supertest');
const Server = require('../models/server');
const server = new Server();
const app = server.app;


describe('Endpoints de productos', () => {
    it('Debería obtener todos los productos', async () => {
        const response = await request(app).get('/api/productos');
        expect(response.statusCode).toBe(200);
    });
});
/*------------------------------------------------------------------------------------------*/

describe('Endpoints de productos', () => {
    it('Debería crear un nuevo producto', async () => {
        // Datos del nuevo producto a crear
        const nuevoProducto = {
            nombre: 'Nuevo Producto',
            precio: 99.99
        };

        // Realizamos una solicitud POST para crear el nuevo producto
        const response = await request(app)
            .post('/api/productos')
            .send(nuevoProducto);

        // Verificamos que la respuesta tenga un código de estado 201 (Creado)
        expect(response.statusCode).toBe(201);

        // Verificamos que la respuesta contenga los datos del nuevo producto creado
        expect(response.body.ok).toBe(true);
        expect(response.body.mensaje).toBe('Producto creado correctamente');
        expect(response.body.producto).toEqual({
            nombre: nuevoProducto.nombre,
            precio: nuevoProducto.precio
        });
    });
});
/*-------------------------------------------------------------------------------*/
describe('Endpoints de productos', () => {
    it('Debería actualizar un producto existente', async () => {
        // Datos del producto existente a actualizar
        const idProductoExistente = 1;
        const datosActualizados = { nombre: 'Producto Actualizado', precio: 50.99 };

        // Realizamos una solicitud PUT para actualizar el producto existente
        const response = await request(app)
            .put(`/api/productos/${idProductoExistente}`)
            .send(datosActualizados);

        // Convertimos el ID del producto existente a una cadena antes de realizar la comparación
        const idProductoEsperado = idProductoExistente.toString();

        // Verificamos que la respuesta tenga un código de estado 200 (OK)
        expect(response.statusCode).toBe(200);

        // Verificamos que la respuesta contenga los datos actualizados del producto
        expect(response.body.ok).toBe(true);
        expect(response.body.producto).toEqual({
            id: idProductoEsperado, // Convertimos el ID a una cadena
            ...datosActualizados
        });
    });
});

/*-------------------------------------------------------------------------------*/

describe('Endpoints de productos', () => {
    it('Debería eliminar un producto existente', async () => {
        // Supongamos que tenemos un producto existente con ID 1
        const idProductoExistente = 1;

        // Realizamos una solicitud DELETE para eliminar el producto existente
        const response = await request(app)
            .delete(`/api/productos/${idProductoExistente}`);

        // Convertimos el ID del producto existente a una cadena antes de realizar la comparación
        const idProductoEsperado = idProductoExistente.toString();

        // Verificamos que la respuesta tenga un código de estado 200 (OK)
        expect(response.statusCode).toBe(200);

        // Verificamos que la respuesta contenga los datos del producto eliminado
        expect(response.body.ok).toBe(true);
        expect(response.body.producto).toEqual({
            id: idProductoEsperado // Convertimos el ID a una cadena
        });
    });

});
/* _____________________________________________________________________________________*/

describe('Endpoints de productos', () => {
    it('Debería obtener un solo producto por su ID', async () => {
        const idProductoExistente = 1;

        const response = await request(app)
            .get(`/api/productos/${idProductoExistente}`);

        expect(response.statusCode).toBe(200);
        expect(response.body.ok).toBe(true);
    });
});
/* _____________________________________________________________________________________*/
describe('Endpoints de productos', () => {
    it('Debería obtener productos dentro de un rango de precios', async () => {
        const precioMinimo = 10;
        const precioMaximo = 30;

        const response = await request(app)
            .get(`/api/productos/precio?precioMin=${precioMinimo}&precioMax=${precioMaximo}`);

        expect(response.statusCode).toBe(200);
        expect(response.body.ok).toBe(true);
    });
});
/**_________________________________________________________________________________ */
describe('Endpoints de productos', () => {
    it('Debería obtener productos por categoría', async () => {
        const categoria = 'Hogar';

        const response = await request(app)
            .get(`/api/productos/categoria/${categoria}`);

        expect(response.statusCode).toBe(200);
        expect(response.body.ok).toBe(true);

    });
});
/*---------------------------------------------------------------------------------- */
describe('Endpoints de productos', () => {
    it('Debería obtener productos por nombre', async () => {
        const nombreProducto = 'Escoba';

        const response = await request(app)
            .get(`/api/productos/nombre/${nombreProducto}`);

        expect(response.statusCode).toBe(200);
        expect(response.body.ok).toBe(true);
    });
});