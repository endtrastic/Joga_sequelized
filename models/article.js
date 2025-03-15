'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Article extends Model {
    static associate(models) {
      this.belongsTo(models.Author, {
        foreignKey: {
          name: 'AuthorId',
          field: 'author_id',
        },
      });

      this.belongsToMany(models.Tag, {
        foreignKey: 'articleId',
        through: 'ArticleTags',
      });
    }
  }

  Article.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true, 
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      slug: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      image: DataTypes.STRING,
      body: DataTypes.TEXT,
      published: DataTypes.DATE,
      author_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Authors',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      modelName: 'Article',
      tableName: 'Articles',
      timestamps: true,
    }
  );

  return Article;
};
