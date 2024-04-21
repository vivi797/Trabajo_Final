const express = require('express');

const app = express();
app.use(express.json());

app.get('/prueba', (req, res) => {
    res.send([1,2,3])
});

// app.post('/prueba', (req, res) => {
//     res.json([]);
// });

app.post('/prueba', (req, res) => {
    const {nombre, apellido}=req.body;
    res.json({
        nombre,
        apellido,
        id: "id"
    });
});

module.exports = {app};