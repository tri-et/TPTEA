'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Clients', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      no: {
        type: Sequelize.STRING,
      },
      code: {
        type: Sequelize.STRING,
      },
      name: {
        type: Sequelize.STRING,
      },
      taxcode: {
        type: Sequelize.STRING,
      },
      address: {
        type: Sequelize.STRING,
      },
      deliveryaddress: {
        type: Sequelize.STRING,
      },
      contact: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      tel: {
        type: Sequelize.STRING,
      },
      fax: {
        type: Sequelize.STRING,
      },
      website: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        defaultValue: Sequelize.fn('now'),
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        defaultValue: Sequelize.fn('now'),
        type: Sequelize.DATE,
      },
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Clients')
  },
}
