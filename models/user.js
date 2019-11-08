'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    name: {
      type:DataTypes.STRING,
      allowNull:false},
    email: {
      type:DataTypes.STRING,
      allowNull:false
    },
    password: {
      type:DataTypes.STRING,
      allowNull:false
    },
  }, {
    underscored: true,
  });
  user.associate = function(models) {
    user.hasMany(models.recipe,{
      foreignKey:"user_id",
      onDelete:"CASCADE"
    })
    // associations can be defined here
  };
  return user;
};