const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model { }

ProductTag.init(
  {// define columns * `ProductTag`
    // * `id`
    id: {
      //   * Integer
      type: DataTypes.INTEGER,
      //   * Don't allow null values
      allowNull: false,
      //   * Set as primary key
      primaryKey: true,
      //   * Use auto increment
      autoIncrement: true
    },
    // * `product_id`
    product_id: {
      //   * Integer
      type: DataTypes.INTEGER,
      //   * Reference the `product` model's `id`
      references: {
        model: 'product',
        key: 'id'
      }
    },
    // * `tag_id`
    tag_id: {
      //   * Integer
      type: DataTypes.INTEGER,
      //   * Reference the `tag` model's `id`
      references: {
        model: 'tag',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
