'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Articles', 'author_id', {
      type: Sequelize.INTEGER,
      allowNull: true, 
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Articles', 'author_id', {
      type: Sequelize.INTEGER,
      allowNull: false, 
    });
  }
};
