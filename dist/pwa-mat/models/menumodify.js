'use strict';

module.exports = function (sequelize, DataTypes) {
  var menumodify = sequelize.define('menumodify', {
    menuId: DataTypes.INTEGER,
    modifierId: DataTypes.INTEGER
  }, {});
  menumodify.associate = function (models) {
    // associations can be defined here
  };
  return menumodify;
};