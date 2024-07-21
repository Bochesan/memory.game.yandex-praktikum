'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER
      },
      login: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      first_name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      second_name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      display_name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE,
        defaultValue: Sequelize.DataTypes.NOW
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE,
        defaultValue: Sequelize.DataTypes.NOW
      }
    });
  },

  async down (queryInterface) {
    await queryInterface.dropTable('Users');
  }
};
