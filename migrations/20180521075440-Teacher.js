'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {    
    return queryInterface.addColumn("Subjects", "teacher", {type: Sequelize.INTEGER})
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
