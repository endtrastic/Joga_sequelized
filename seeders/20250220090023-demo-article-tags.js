'use strict';

module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('ArticleTags', [
      {
        articleId: 1,
        tagId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        articleId: 1,
        tagId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        articleId: 2,
        tagId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        articleId: 2,
        tagId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        articleId: 3, 
        tagId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        articleId: 3,
        tagId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        articleId: 3,
        tagId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('ArticleTags');
  }
};
