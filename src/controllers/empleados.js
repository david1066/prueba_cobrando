"use strict";

var validator = require("validator");
const Empleado = require('../database/models/empleado');
const {v4 } = require('uuid');

const Departamento = require('../database/models/departamento');


var controller = {
    create: function (req, res) {
        var params = req.body;
        
        try {
            var validate_nif = !validator.isEmpty(params.nif);
            var validate_nombre = !validator.isEmpty(params.nombre);
            var validate_apellido1 = !validator.isEmpty(params.apellido1);
            var validate_apellido2 = !validator.isEmpty(params.apellido2);
            var validate_iddepartamento = !validator.isEmpty(params.iddepartamento) && validator.isInt(params.iddepartamento);
          
        } catch (err) {
            return res.status(200).send({ message: "faltan datos por enviar" });
        }
        //validando parametros
        if (validate_nif && validate_nombre && validate_apellido1 
            && validate_apellido2 && validate_iddepartamento) {

            //validando que el usuario no exista
            var nif = params.nif;
            
            Empleado.findOne({
                where: {
                    nif: nif,
                    deletedAt: null
                }
            }
            ).then(empleado => {

                if (empleado != null) {
                    return res.status(400).send({ status: 'error', message: "El empleado ya existe" });
                } else {
                    var create={
                        id:v4(), 
                        nif: params.nif,
                        nombre: params.nombre,
                        apellido1: params.apellido1,
                        apellido2: params.apellido2,
                        iddepartamento: params.iddepartamento,
                        
                    }
                    Empleado.create(create).then(empleado => {
                        return res.status(200).send({ status: 'success', empleado: empleado });
                    }).catch(err => {
                        return res.status(400).send({ status: 'error', message: "error al crear el empleado",create });
                    }
                    );

                }

            })
            .catch(err => {
                return res.status(400).send({ status: 'error', message: "No se ha creado con exito" });

            })




        } else {
            return res.status(400).send({ status: 'error', message: "validacion de los datos del usuario incorrecta" });
        }

        // return res.status(200).send({ user: params });

    },
    update: function (req, res) {
        var nif = req.params.id;
        var params = req.body;

        try {
            var validate_nif = !validator.isEmpty(nif);
            var validate_nombre = !validator.isEmpty(params.nombre);
            var validate_apellido1 = !validator.isEmpty(params.apellido1);
            var validate_apellido2 = !validator.isEmpty(params.apellido2);
            var validate_iddepartamento = !validator.isEmpty(params.iddepartamento) && validator.isInt(params.iddepartamento);

        } catch (err) {
            return res.status(200).send({ status: 'error', message: "faltan datos por enviar"});
        }

        if (validate_nif && validate_nombre && validate_apellido1 
            && validate_apellido2 && validate_iddepartamento) {
        

            var update = {
                nombre: params.nombre,
                apellido1: params.apellido1,
                apellido2: params.apellido2,
                iddepartamento: params.iddepartamento,
                updatedAt: new Date()

            };

            Empleado.update(
                update, {
                where: {
                    nif: nif,
                    deletedAt: null
                }
            }).then(empleado => {
                if (empleado == 1) {

                    return res.status(200).send({ status: 'success', empleado: update });
                }
                return res.status(400).send({ status: 'error', message: "error al actualizar el empleado" });
            }).catch(err => {
                return res.status(400).send({ status: 'error', message: "error al actualizar el empleado" });
            }
            );
        } else {
            return res.status(400).send({ status: 'error', message: "validacion de los datos del empleado incorrecta" });
        }

      

    },
    delete: function (req, res) {
        var nif = req.params.id;
   
        Empleado.update({
            deletedAt: new Date()
        }, {
            where: {
                nif: nif,
                deletedAt: null
            }
        }).then(empleado => {
            if (empleado == 1) {
                return res.status(200).send({ status: 'success', empleado: empleado });
            }
            return res.status(400).send({ status: 'error', message: "error al eliminar al empleado" });
        }).catch(err => {
            return res.status(400).send({ status: 'error', message: "error al eliminar al empleado" });
        }
        );


    },
    getEmpleado: function (req, res) {
        var nif = req.params.id;

        Empleado.findOne({
            where: {
                nif: nif,
                deletedAt: null

            },
            include: [{
                model: Departamento
               }]
            
        }
        ).then(empleado => {

            if (empleado != null) {
               
                return res.status(200).send({ status: 'success', empleado: empleado });
            } else {
                return res.status(400).send({ status: 'error', message: "No encontrados" });

            }

        })
            .catch(err => {
                return res.status(400).send({ status: 'error', message: "No encontrados" });

            })
    },

    getEmpleados: function (req, res) {
        var nif = req.params.id;

        Empleado.findAll({
            where: {
                deletedAt: null

            },
            include: [{
                model: Departamento
               }]
        }
        ).then(empleado => {

            if (empleado != null) {
                return res.status(200).send({ status: 'success', empleado: empleado });
            } else {
                return res.status(400).send({ status: 'error', message: "No encontrados" });

            }

        })
            .catch(err => {
                return res.status(400).send({ status: 'error', message: "No encontrados" });

            })
    }
};

module.exports = controller;
