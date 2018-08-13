'use strict';
module.exports = (sequelize, DataTypes) => {
  var customer = sequelize.define('customer', {
    name: DataTypes.STRING,
    add: DataTypes.STRING,
    phone: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    points: DataTypes.INTEGER,
    balance: DataTypes.FLOAT
  }, {});
  customer.associate = function(models) {
    // associations can be defined here
  };
  return customer;
};