'use strict'
module.exports = (sequelize, DataTypes) => {
  var MenuCategory = sequelize.define(
    'MenuCategory',
    {
      menuId: DataTypes.INTEGER,
      categoryId: DataTypes.INTEGER,
    },
    {}
  )
  MenuCategory.associate = function(models) {
    // associations can be defined here
  }
  return MenuCategory
}
