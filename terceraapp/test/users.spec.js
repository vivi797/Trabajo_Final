const request = require('supertest');
const Server = require('../models/server');
const server = new Server();
const app = server.app;


const token = "12345"
const datosprueba = [
    { nombre: "María", edad: "25" },
    { nombre: "Pedro", edad: "30" },
    { nombre: "Laura", edad: "28" }
];

const userId = 3;


describe('GET /api/users', () => {
    test('respuesta codigo 200', async () => {
        const response = await request(server.app).get('/api/users').send();
        expect(response.statusCode).toBe(200);
        // expect(response.headers['Content-Type']).toEqual(
        //     expect.stringContaining("json")
        // );
    });

    // test('respuesta json', async () => {
    //     const response = await request(server.app).get('/api/users').send();
    //     // expect(response.statusCode).toBe(200);
    //     expect(response.headers['Content-Type']).toEqual(
    //         expect.stringContaining("json")
    //     );
    // });
});

//CREAR USUARIO
describe("post /api/users", () => {

    test("Crear usuario", async () => {
        return request(server.app)
        .post('/api/users')
        .set('Authorization', 'Bearer ' +token)
        .send(datosprueba)
        .expect('Content-Type', /json/)
        .expect(201)
        .then(({body})=>{
            datosprueba.nombre=body.nombre;
            
        })
    });

    test("Se puede crear usuario", async () => {
        return request(server.app)
        .post('/api/users')
        .send(datosprueba)
        .expect(201)
    });
})


// ACTUALIZAR USUARIO

describe("put /api/users/:id", () => {

    test("Actualizacion usuario", async () => {
        return request(server.app)
        .put(`/api/users/${userId}`)
        .set('Authorization', 'Bearer ' +token)
        .send(datosprueba)
        .expect('Content-Type', /json/)
        .expect(201)
        .then(({body})=>{
            console.log(body.id)
        })
    })
})

//ELIMINAR USUARIO 
describe("Delete /api/users/:id", () => {

    test("Eliminacion usuario", async () => {
        return request(server.app)
        .delete(`/api/users/${userId}`)
        .set('Authorization', 'Bearer ' +token)
        .expect(410)
    })
})

 // Buscar usuarios por nombre
 describe('GET/api/users', () => {
    test("Buscar usuarios por nombre 'Juan'", async () => {
        const nombreABuscar = 'Juan';
        const response = await request(server.app)
            .get(`/api/users?query=${nombreABuscar}`)
            .expect('Content-Type', /json/)
            .expect(200);
    });
});

//Buscar Usuario por Id
describe('GET/api/users/:id', ()=>{
    test("Buscar Usarios por  id nº '3' " , async () => {
        const IdABuscar = userId;
        const response = await request(server.app)
        .get(`/api/users?query=${IdABuscar}`)
        .expect('Content-Type', /json/)
        .expect(200);
    })
})

//Consulta para obtener datos de todos los usuarios:
describe('GET /api/users/',()=> {
    test('Obtener datos de todos los usuarios', async () => {
        const idTotalUsuarios = datosprueba;
        const response = await request(server.app)
            .get(`/api/users?query=${idTotalUsuarios}`)
            .expect('Content-Type', /json/)
            .expect(200);
    });
});
