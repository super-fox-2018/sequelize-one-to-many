'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

   return queryInterface.bulkInsert('teachers', [{
    first_name: 'Bambang',
    last_name: 'Suprapto',
    email: 'bambangsuprapto@sekolah.id',
    subject : 1,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    first_name: 'Rukmana',
    last_name: 'Fatmawati',
    email: 'rukmanafatmawati@sekolah.id',
    subject : 1,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    first_name: 'Butet',
    last_name: 'Naiborhu',
    email: 'butetnaiborhu@sekolah.id',
    subject : 2,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    first_name: 'Yulius',
    last_name: 'Prawiranegara',
    email: 'yuliusprawiranegara@sekolah.id',
    subject : 2,
    createdAt: new Date(),
    updatedAt: new Date()
  }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
