const { Model, DataTypes } = require('sequelize');

const CLIENT_PLATFORM_TABLE = 'ClientPlatform';

const ClientPlatformSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: true,
    defaultValue: false,
  },
};

class ClientPlatform extends Model {
  static associate(models) {}

  static config(sequelize) {
    return {
      sequelize,
      tableName: CLIENT_PLATFORM_TABLE,
      modelName: 'ClientPlatform',
    };
  }
}

module.exports = { CLIENT_PLATFORM_TABLE, ClientPlatformSchema, ClientPlatform };
