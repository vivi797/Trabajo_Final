const  { Router } = require('express');

const { viewUsers, usuariosPost, usuariosPut, usuariosDelete, nombreABuscar, IdABuscar, idTotalUsuarios, } = require('../controllers/users.controller');

const routerUser = Router();

routerUser.get('', viewUsers);
routerUser.post('', usuariosPost);
routerUser.put('/:id', usuariosPut);
routerUser.delete('/:id', usuariosDelete);
routerUser.get('/:nombre', nombreABuscar );
routerUser.get('/:id', IdABuscar);
routerUser.get('/:id',idTotalUsuarios);


module.exports = routerUser;