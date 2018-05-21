'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
   return queryInterface.renameColumn("Teachers", "subject", "subjectId")
  },

  down: (queryInterface, Sequelize) => {
    // return queryInterface.renameColumn("Teachers", "subject", "subjectId", {type: Sequelize.STRING})

    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
