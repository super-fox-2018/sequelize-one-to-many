'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {    
    
   return  queryInterface.changeColumn("Teachers", 
   "subjectId", 
   {type: 'INTEGER USING CAST("subjectId" as INTEGER)'})
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
