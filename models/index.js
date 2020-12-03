// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Associations
// > **Hint:** Make sure you set up foreign key relationships that match the column we created in the respective models.

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id'//product_id?
})
// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id'//product_id?
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  //as: '',
  foreignKey: 'product_id'
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  //as: '',
  foreignKey: 'tag_id'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
