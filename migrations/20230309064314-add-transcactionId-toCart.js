'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.addColumn('Carts', 'TransactionId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Transactions',
        key: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    })
  },

  down(queryInterface, Sequelize) {
    return queryInterface.removeColumn('Carts', 'TransactionId')
  }
};
