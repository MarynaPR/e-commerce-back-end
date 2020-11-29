const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model { }

Tag.init(
  {
    // define columns * `Tag`
    id: {// * `id`
      //   * Integer
      type: DataTypes.INTEGER,
      //   * Don't allow null values
      allowNull: false,
      //   * Set as primary key
      primaryKey: true,
      //   * Use auto increment
      autoIncrement: true
    },
    // * `tag_name`
    tag_name: {
      //   * String
      type: DataTypes.STRING
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
