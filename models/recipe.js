'use strict';
module.exports = (sequelize, DataTypes) => {
  const recipe = sequelize.define('recipe', {
    title: {
      type:DataTypes.STRING,
      allowNull:false
    },
    ingredients: {
      type:DataTypes.TEXT,
      allowNull:false},
    direction: {
      type:DataTypes.TEXT,
      allowNull:false},
  }, {
    underscored: true,
  });
  recipe.associate = function(models) {
    recipe.belongsTo(models.user,{
      foreignKey:"user_id",
      onDelete:"CASCADE"
    })
  };
  return recipe;
};