const { Model, DataTypes } = require('sequelize');
const sequelize = new require('../db');

class Departamento extends Model { }

Departamento.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        
    },
    nombre: DataTypes.STRING,
    presupuesto:DataTypes.DOUBLE,
},
{
     sequelize, tableName: 'departamentos',modelName: 'Departamento',
    
});



module.exports = Departamento;