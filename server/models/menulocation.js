'use strict';
module.exports = (sequelize, DataTypes) => {
  var menulocation = sequelize.define('menulocation', {
    menuid: DataTypes.INTEGER,
    locationid: DataTypes.INTEGER
  }, {});
  menulocation.associate = function(models) {
    // associations can be defined here
  };
  return menulocation;
};