'use strict'

var data = [
  {
    unit: 'm2',
    price: 230000,
    quantity: 20,
    // foreign key...
    invoiceId: 1,
    productId: 3,
  },
  {
    unit: 'kg',
    price: 1800000,
    quantity: 25,
    // foreign key...
    invoiceId: 1,
    productId: 5,
  },
  {
    unit: 'm3',
    price: 12000,
    quantity: 15,
    // foreign key...
    invoiceId: 2,
    productId: 4,
  },
  {
    unit: 'kg',
    price: 350000,
    quantity: 33,
    // foreign key...
    invoiceId: 2,
    productId: 5,
  },
  {
    unit: 'm2',
    price: 22500,
    quantity: 45,
    // foreign key...
    invoiceId: 2,
    productId: 6,
  },
]

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('sellings', data, {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('sellings', null, {})
  },
}
