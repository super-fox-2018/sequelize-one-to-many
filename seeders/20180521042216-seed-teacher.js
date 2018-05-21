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
    return queryInterface.bulkInsert('teachers',[{
      firstName:"Bambang",
      lastName:"Suprapto",
      email:"bambangsuprapto@sekolah.id",
      createdAt: new Date,
      updatedAt: new Date,
      subjectId:1
    },{
      firstName:"Rukmana",
      lastName:"Fatmawati",
      email:"rukmanafatmawati@sekolah.id",
      createdAt: new Date,
      updatedAt: new Date,
      subjectId:1
    },{
      firstName:"Butet",
      lastName:"Naiborhu",
      email:"butetnaiborhu@sekolah.id",
      createdAt: new Date,
      updatedAt: new Date,
      subjectId: 2
    },{
      firstName:"Yulius",
      lastName:"Prawiranegara",
      email:"yuliusprawiranegara@sekolah.id",
      createdAt: new Date,
      updatedAt: new Date
    }]);


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
