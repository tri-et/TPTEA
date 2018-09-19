'use strict'
module.exports = (sequelize, DataTypes) => {
  var Modify = sequelize.define(
    'Modify',
    {
      name: DataTypes.STRING,
      price: DataTypes.STRING,
      type: DataTypes.STRING,
    },
    {}
  )
  Modify.associate = function(models) {
    // associations can be defined here
  }
  return Modify
}
