'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Items extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Items.hasMany(models.Cart)
      Items.belongsToMany(models.Transaction, { through: models.Cart })
    }
  }
  Items.init({
    productName: DataTypes.STRING,
    price: DataTypes.INTEGER,
    category: DataTypes.STRING,
    img: DataTypes.TEXT,
    description: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Items',
  });
  return Items;
};