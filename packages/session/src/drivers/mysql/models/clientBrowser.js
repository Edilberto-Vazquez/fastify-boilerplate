const { Model, DataTypes } = require('sequelize');

const CLIENT_BROWSER_TABLE = 'ClientBrowser';

const ClientBrowserSchema = {
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

class ClientBrowser extends Model {
  static associate(models) {}

  static config(sequelize) {
    return {
      sequelize,
      tableName: CLIENT_BROWSER_TABLE,
      modelName: 'ClientBrowser',
    };
  }
}

module.exports = { CLIENT_BROWSER_TABLE, ClientBrowserSchema, ClientBrowser };
