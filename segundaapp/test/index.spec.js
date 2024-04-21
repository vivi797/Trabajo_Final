const request = require('supertest');
const {app} = require('../src/app');

describe('GET /prueba', () => {
    test('respuesta codigo 200', async () => {
        const response = await request(app).get('/prueba').send();
        expect(response.statusCode).toEqual(200);
    });

    test('muestra un arreglo', async () => {
        const response = await request(app).get('/prueba').send();
        expect(response.body).toBeInstanceOf(Array);
    });
});

describe('POST /prueba', () => {
    // verificar estado de metodo
    test('respuesta codigo 200', async () => {
        const response = await request(app).post('/prueba').send();
        expect(response.statusCode).toEqual(200);
    });

    // verificar respuesta json
    test('Respuesta content type: application-json en cabecera', async()=>{
        const response = await request(app).post('/prueba').send();
        expect(response.headers["content-type"]).toEqual(
            expect.stringContaining("json")
        )
    });

    // verificar la existencia de id
    test('Verificar que exista id en respuesta /prueba', async()=>{
        const response = await request(app).post('/prueba').send({
            nombre: "Daniel",
            apellido: "Arteaga"
        });
        expect(response.body.id).toBeDefined();
    });


});