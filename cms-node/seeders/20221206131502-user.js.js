'use strict';

const { hashPassword } = require('../helper/auth');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const p = await hashPassword("admin123@yopmail.com");
  
     await queryInterface.bulkInsert('Users', [{
      name: 'Admin',
      email :'admin123@yopmail.com',
      password: p,
      phone:"9713312967",
      role:"1",
      createdAt: new Date(),
      updatedAt: new Date()
      }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
