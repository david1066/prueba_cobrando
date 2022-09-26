'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     **/
   
     await queryInterface.bulkInsert('departamentos', [{
      nombre: 'Amazonas',
      presupuesto: 123.3,
      createdAt: new Date(),
      updatedAt: new Date()
     },{
      nombre: 'Cundinamarca',
      presupuesto: 173.3,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      nombre: 'Caldas',
      presupuesto: 183.3,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
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
