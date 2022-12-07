'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Role.init(
    {
    // firstName: DataTypes.STRING
      id : {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
     
          },
     title: {
            type: DataTypes.STRING
          },
    description: {
            type: DataTypes.STRING
          },
    isDeleted: {
            type: DataTypes.BOOLEAN,
            defaultValue:false
          }, 
    // createdAt: {
    //          type: DataTypes.DATE
    //      },
    // updatedAt: {
    //          type: DataTypes.DATE
    //      },

  }, {
    sequelize,
    modelName: 'Role',
  });
  return Role;
};