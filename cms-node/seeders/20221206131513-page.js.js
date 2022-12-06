'use strict';

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
      await queryInterface.bulkInsert('Pages', [{
        name: 'contactus',
        description:"this is information page of the company",
        author:1,
        html:"<div><h2>Hi,</h2><p>There was a request to change your password!</p><p>If you did not make this request then please ignore this email.</p><p><h3>Your reset password link will expire in 1 hours</h3></p><p>Otherwise, please click this link to change your password: <a href='#' style='background:#ea4522;text-decoration:none !important; font-weight:500; color:#fff;text-transform:uppercase; font-size:10px;padding:10px 4px;display:inline-block;border-radius:50px;>ResetPassword</a></p></div>",
        status:"published",
        slug:"contactus",
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
