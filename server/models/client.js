'use strict'
module.exports = (sequelize, DataTypes) => {
  var Client = sequelize.define(
    'Client',
    {
      taxCode: DataTypes.STRING,
      name: DataTypes.STRING,
      address: DataTypes.STRING,
      phone: DataTypes.STRING,
      notes: DataTypes.STRING,
    },
    {}
  )
  Client.associate = function(models) {
    // associations can be defined here
    Client.hasMany(models.Invoice, {
      foreignKey: 'clientId',
    })
  }
  return Client
}
