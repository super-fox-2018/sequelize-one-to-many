'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => 
    queryInterface.bulkInsert('subjects', [
      { subjectName: 'Kimia' },
      { subjectName: 'Ekonomi' },
      { subjectName: 'Fisika' },
      { subjectName: 'Matematika' },
      { subjectName: 'Biologi' },
    ], {}),

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('subjects', null, {});
  }
};
