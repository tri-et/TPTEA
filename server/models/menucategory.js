'use strict'
module.exports = (sequelize, DataTypes) => {
  var MenuCategory = sequelize.define(
    'MenuCategory',
    {
      name: DataTypes.STRING,
      desc: DataTypes.STRING,
      img: DataTypes.STRING,
    },
    {}
  )
  MenuCategory.associate = function(models) {
    // associations can be defined here
  }
  return MenuCategory
}
