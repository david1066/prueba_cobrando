"use strict";
const Departamento = require('../database/models/departamento');


var controller = {
  getDepartamentos: function (req, res) {

    Departamento.findAll().then(cities=>{
        return res.status(200).send({ cities: cities});
    }).catch(err=>{
        return res.status(200).send({ message: "No hay departamentos" });
    });

  }
}


module.exports = controller;
 