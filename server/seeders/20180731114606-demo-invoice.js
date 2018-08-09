'use strict'

var data = [
  {
    invNo: 'INV0002',
    clientId: 5,
  },
  {
    invNo: 'INV0003',
    clientId: 3,
  },
]

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('invoices', data, {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('invoices', null, {})
  },
}
