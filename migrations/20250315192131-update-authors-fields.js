'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('Authors', 'slug', {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      }),
      queryInterface.addColumn('Authors', 'image', {
        type: Sequelize.STRING,
      }),
      queryInterface.addColumn('Authors', 'body', {
        type: Sequelize.TEXT,
      }),
      queryInterface.addColumn('Authors', 'published', {
        type: Sequelize.DATE,
      }),
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('Authors', 'slug'),
      queryInterface.removeColumn('Authors', 'image'),
      queryInterface.removeColumn('Authors', 'body'),
      queryInterface.removeColumn('Authors', 'published'),
    ]);
  },
};
