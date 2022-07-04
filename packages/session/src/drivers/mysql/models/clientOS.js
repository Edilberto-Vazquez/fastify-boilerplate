const { Model, DataTypes } = require('sequelize');

const CLIENT_OS_TABLE = 'ClientOS';

const ClientOSSchema = {
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

class ClientOS extends Model {
  static associate(models) {}

  static config(sequelize) {
    return {
      sequelize,
      tableName: CLIENT_OS_TABLE,
      modelName: 'ClientOS',
    };
  }
}

module.exports = { CLIENT_OS_TABLE, ClientOSSchema, ClientOS };
