'use strict'
module.exports = (sequelize, DataTypes) => {
  var menumodify = sequelize.define(
    'menumodify',
    {
      menuId: DataTypes.INTEGER,
      modifyId: DataTypes.INTEGER,
    },
    {}
  )
  menumodify.associate = function(models) {
    // associations can be defined here
  }
  return menumodify
}
