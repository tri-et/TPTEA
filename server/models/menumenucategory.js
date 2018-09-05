'use strict'
module.exports = (sequelize, DataTypes) => {
  var Menumenucategory = sequelize.define(
    'menumenucategory',
    {
      menuId: DataTypes.INTEGER,
      menucategoryId: DataTypes.INTEGER,
    },
    {}
  )
  Menumenucategory.associate = function(models) {
    // associations can be defined here
  }
  return Menumenucategory
}
