'use strict'
module.exports = (sequelize, DataTypes) => {
  var menucategory = sequelize.define(
    'menucategory',
    {
      menuId: DataTypes.INTEGER,
      categoryId: DataTypes.INTEGER,
    },
    {}
  )
  menucategory.associate = function(models) {
    // associations can be defined here
  }
  return menucategory
}
