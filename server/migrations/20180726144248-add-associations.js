'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('StockOuts', 'productId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Products',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    })
    // .then(() => {
    //   return queryInterface.addColumn('Stock', 'productId', {
    //     type: Sequelize.UUID,
    //     references: {
    //       model: 'Product',
    //       key: 'id',
    //     },
    //     onUpdate: 'CASCADE',
    //     onDelete: 'SET NULL',
    //   })
    // })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('StockOuts', 'productId')
    // .then(() => {
    //   return queryInterface.removeColumn('Stock', 'productId')
    // })
  },
}
