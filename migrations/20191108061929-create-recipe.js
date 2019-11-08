'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('recipes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING,
        allowNull:false
      },
      ingredients: {
        type: Sequelize.TEXT,
        allowNull:false
      },
      direction: {
        type: Sequelize.TEXT,
        allowNull:false
      },
      user_id:{
        type:Sequelize.INTEGER,
        onDelete:"CASCADE",
        references:{
          model:"users",
          key:'id'
        } 
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('recipes');
  }
};