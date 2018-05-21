'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {    
   return queryInterface.renameColumn("Teachers", "subject", "subjectId");
    
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
