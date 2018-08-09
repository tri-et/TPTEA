'use strict'
module.exports = (sequelize, DataTypes) => {
  var Selling = sequelize.define(
    'Selling',
    {
      unit: DataTypes.STRING,
      price: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
    },
    {timestamps: false}
  )
  Selling.associate = function(models) {
    // associations can be defined here
    Selling.belongsTo(models.Invoice, {
      foreignKey: 'invoiceId',
    })
    Selling.belongsTo(models.Product, {
      foreignKey: 'productId',
    })
  }
  return Selling
}
