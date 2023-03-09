'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    static associate(models) {
      Transaction.belongsTo(models.User)
      Transaction.hasMany(models.Cart)
      Transaction.belongsToMany(models.Item, { through: models.Cart })
    }
  }
  Transaction.init({
    totalPrice: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    isComplete: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Transaction',
  });
  return Transaction;
};