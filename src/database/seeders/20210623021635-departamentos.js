'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     **/
   
     await queryInterface.bulkInsert('departamentos', [{
      id:1,
      nombre: 'Amazonas',
      presupuesto: 123.3,
      createdAt: new Date(),
      updatedAt: new Date()
     },{
      id:2,
      nombre: 'Cundinamarca',
      presupuesto: 173.3,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {id:3,
      nombre: 'Caldas',
      presupuesto: 183.3,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {id:4,
      nombre: 'Meta',
      presupuesto: 133.3,
      createdAt: new Date(),
      updatedAt: new Date()
     }], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
