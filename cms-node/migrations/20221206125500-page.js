// 'use strict';

// /** @type {import('sequelize-cli').Migration} */
// module.exports = {
//   async up (queryInterface, Sequelize) {
//     /**
//      * Add altering commands here.
//      *
//      * Example:
//      * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
//      */
//   },

//   async down (queryInterface, Sequelize) {
//     /**
//      * Add reverting commands here.
//      *
//      * Example:
//      * await queryInterface.dropTable('users');
//      */
//   }
// };



"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Pages", {
      id : {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
 
      },
      name:{
        type:Sequelize.STRING,
        allowNull: false,
        notEmpty: true, 
        unique: {
            msg:'name shulde be unique !'
        }
      },
      author: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users", // 'Author' would  work
          key: 'id'
        },
        allowNull: false
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false
      },
      slug :{
        type:Sequelize.STRING,
      },
      status:{
        type: Sequelize.STRING,
      
      },
      html:{
        type:Sequelize.TEXT,
        allowNull: false
      },
      isDeleted: {
        type: Sequelize.BOOLEAN,
        defaultValue:false
      }, 
      createdAt: {
         type: Sequelize.DATE
     },
     updatedAt: {
         type: Sequelize.DATE
     },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Pages");
  },
};



