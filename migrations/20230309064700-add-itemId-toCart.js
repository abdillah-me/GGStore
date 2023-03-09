'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.addColumn('Carts', 'ItemsId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Items',
        key: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    })
  },

  down(queryInterface, Sequelize) {
    return queryInterface.removeColumn('Carts', 'ItemsId')
  }
};
