const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model { }

Category.init(
  {// define columns `Category`
    // * `id`
    id: {
      //   * Integer
      type: DataTypes.INTEGER,
      //   * Doesn't allow null values
      allowNull: false,
      //   * Set as primary key
      primaryKey: true,
      //   * Use auto increment
      autoIncrement: true
    },
    // * `category_name`
    category_name: {
      //   * String
      type: DataTypes.STRING,
      //   * Doesn't allow null values
      allowNull: false
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
