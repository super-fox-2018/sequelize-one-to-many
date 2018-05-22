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
    return queryInterface.bulkInsert('Teachers',
      [
        {
          firstName: 'Bambang' ,
          lastName: 'Suprapto',
          email: 'bambangsuprapto@sekolah.id',
          SubjectId: 1
        },
        {
          firstName: 'Rukmana',
          lastName: 'Fatmawati',
          email: 'rukmanafatmawati@sekolah.id',
          SubjectId: 2
        },
        {
          firstName: 'Butet',
          lastName: 'Naiborhu',
          email: 'butetnaiborhu@sekolah.id',
          SubjectId: 1
        },
        {
          firstName: 'Yulius',
          lastName: 'Prawiranegara',
          email: 'yuliusprawiranegara@sekolah.id',
          SubjectId: 3
        }
      ])
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
