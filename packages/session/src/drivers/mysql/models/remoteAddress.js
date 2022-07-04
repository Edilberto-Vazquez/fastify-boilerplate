const { Model, DataTypes } = require('sequelize');

const REMOTE_ADDRESS_TABLE = 'RemoteAddress';

const RemoteAddressSchema = {
  id: {
    type: DataTypes.STRING(45),
    primaryKey: true,
    allowNull: true,
  },
  type: {
    type: DataTypes.ENUM('ipv4', 'ipv6'),
    allowNull: false,
    defaultValue: 'ipv4',
  },
  city: {
    type: DataTypes.STRING(100),
    allowNull: true,
    defaultValue: null,
  },
  zipCode: {
    type: DataTypes.STRING(20),
    allowNull: true,
    defaultValue: null,
    field: 'zip_code',
  },
  whiteList: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
    field: 'white_list',
  },
  greyList: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
    field: 'grey_list',
  },
  blackList: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
    field: 'black_list',
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: DataTypes.NOW,
  },
  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'updated_at',
    defaultValue: DataTypes.NOW,
  },
  deletedAt: {
    allowNull: true,
    type: DataTypes.DATE,
    field: 'deleted_at',
  },
};

class RemoteAddress extends Model {
  static associate(models) {}

  static config(sequelize) {
    return {
      sequelize,
      tableName: REMOTE_ADDRESS_TABLE,
      modelName: 'RemoteAddress',
      timestamps: true,
    };
  }
}

module.exports = { REMOTE_ADDRESS_TABLE, RemoteAddressSchema, RemoteAddress };
