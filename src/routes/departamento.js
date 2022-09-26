const express= require('express');
const router =express.Router();
var DepartamentoController = require('../controllers/departamentos');

//rutas

router.get('/getdepartamentos',DepartamentoController.getDepartamentos);

module.exports= router;