'use strict';

module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Authors', [
      {
        name: 'Ashley Galvin',
        slug: 'ashley-galvin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Patrick Beach',
        slug: 'patrick-beach',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'MacKenzie Miller',
        slug: 'mackenzie-miller',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Authors', null, {});
  }
};
