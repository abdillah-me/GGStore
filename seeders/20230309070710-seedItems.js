'use strict';
const fs = require('fs');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up(queryInterface, Sequelize) {
    const data = JSON.parse(fs.readFileSync('./data/data_obat.json', 'utf-8')).map((el) => {
      el.createdAt = new Date()
      el.updatedAt = new Date()
      return el
    })
    return queryInterface.bulkInsert('Items', data)
  },

  down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Items', null);
  }
};
