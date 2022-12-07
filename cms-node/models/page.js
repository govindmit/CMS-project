'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Page extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Page.init({
    id : {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
 
      },
      name:{
        type:DataTypes.STRING,
        allowNull: false,
        notEmpty: true, 
        unique: {
            msg:'name shulde be unique !'
        }
      },
      author: {
        type: DataTypes.INTEGER,
        references: {
          model: "Users", // 'Author' would  work
          key: 'id'
        },
        allowNull: false
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false
      },
      slug :{
        type:DataTypes.STRING,
      },
      status:{
        type: DataTypes.STRING,
      
      },
      html:{
        type:DataTypes.TEXT,
        allowNull: false
      },
      isDeleted: {
        type: DataTypes.BOOLEAN,
        defaultValue:false
      }, 
      createdAt: {
         type: DataTypes.DATE
     },
     updatedAt: {
         type: DataTypes.DATE
     },
  }, {
    sequelize,
    modelName: 'Page',
  });
  return Page;
};