const { Model, DataTypes } = require('sequelize');
const sequelize = new require('../db');
const Departamento = require('./departamento');



class Empleado extends Model { 
    static associate(models) {
        ProductItem.hasOne(models.Departamento, { as:"departament", foreignKey : 'id', sourceKey : 'iddepartamento'});
      
      }

}

Empleado.init({id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    
}, nif: DataTypes.STRING,
    nombre: DataTypes.STRING,
    apellido1: DataTypes.STRING,
    apellido2: DataTypes.STRING,
    iddepartamento: DataTypes.INTEGER,
    deletedAt:DataTypes.DATE,
    
  
},
{
     sequelize, tableName: 'empleados',modelName: 'Empleado' 
});
Empleado.belongsTo(Departamento, {foreignKey: 'iddepartamento'}); 
/* User.prototype.toJSON =  function () {
    var values = Object.assign({}, this.get());
  
    delete values.password;
    return values;
  } */




module.exports = Empleado;

