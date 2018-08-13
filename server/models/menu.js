'use strict';
module.exports = (sequelize, DataTypes) => {
  var Menu = sequelize.define('Menu', {
    name: DataTypes.STRING,
    desc: DataTypes.STRING,
    price: DataTypes.STRING,
    pic: DataTypes.STRING
  }, {});
  Menu.associate = function(models) {
    // associations can be defined here
  };
  return Menu;
};