'use strict'
module.exports = (sequelize, DataTypes) => {
  var Category = sequelize.define(
    'Category',
    {
      name: DataTypes.STRING,
      desc: DataTypes.STRING,
      img: DataTypes.STRING,
    },
    {}
  )
  Category.associate = models => {
    // associations can be defined here
    Category.belongsToMany(models.Menu, {
      through: 'menucategory',
      foreignKey: 'categoryId',
    })
  }
  return Category
}
