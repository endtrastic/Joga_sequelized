'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Author extends Model {
    static associate(models) {
      this.hasMany(models.Article, {
        foreignKey: 'author_id',
      });
    }
  }

  Author.init(
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
        allowNull: true,
      },
      image: DataTypes.STRING,
      body: DataTypes.TEXT,
      published: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'Author',
      tableName: 'Authors',
      timestamps: true,
    }
  );

  return Author;
};
