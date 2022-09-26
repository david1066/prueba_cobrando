'user strict'
const express= require('express');
const router =express.Router();
var EmpleadoController = require('../controllers/empleados');

router.post('/',EmpleadoController.create);
router.put('/:id',EmpleadoController.update);
router.delete('/:id',EmpleadoController.delete);
router.get('/all',EmpleadoController.getEmpleados);
router.get('/:id',EmpleadoController.getEmpleado);



module.exports= router;