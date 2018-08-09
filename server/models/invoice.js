'use strict'
module.exports = (sequelize, DataTypes) => {
  var Invoice = sequelize.define(
    'Invoice',
    {
      invNo: DataTypes.STRING,
    },
    {}
  )
  Invoice.associate = function(models) {
    // associations can be defined here
    Invoice.hasMany(models.Selling, {
      foreignKey: 'invoiceId',
    })
    Invoice.belongsTo(models.Client, {
      foreignKey: 'clientId',
    })
  }
  return Invoice
}
