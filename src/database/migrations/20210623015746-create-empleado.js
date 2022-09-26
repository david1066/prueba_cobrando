'use strict';
/* const {v4 } = require('uuid'); */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('empleados', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: false,
      }, 
      nif: {
        type: Sequelize.DataTypes.STRING(9)
      },
      nombre: {
        type: Sequelize.DataTypes.STRING(100)
      }, 
      apellido1: {
       type: Sequelize.DataTypes.STRING(100),
      },
      apellido2: {
        type: Sequelize.DataTypes.STRING(100),
      },
      
      iddepartamento: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: 'departamentos',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('empleados');
  }
};