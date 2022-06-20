const { Model, DataTypes } = require('sequelize');

const USER_TABLE = 'users';

const UserSchema = {
  id: {
    type: DataTypes.STRING(10),
    primaryKey: true,
  },
  userName: {
    type: DataTypes.STRING(10),
    allowNull: false,
    field: 'user_name',
  },
  firstName: {
    type: DataTypes.STRING(40),
    allowNull: false,
    field: 'first_name',
  },
  lastName: {
    type: DataTypes.STRING(40),
    allowNull: false,
    field: 'last_name',
  },
  company: {
    type: DataTypes.STRING(150),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(128),
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  stripeId: {
    type: DataTypes.STRING(64),
    allowNull: true,
    defaultValue: null,
    field: 'stripe_id',
  },
  connected: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  connectedAt: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: null,
    field: 'connected_at',
  },
  disconnectedAt: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: null,
    field: 'disconnected_at',
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

class User extends Model {
  static associate(models) {}

  static config(sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'User',
      timestamps: true,
      paranoid: true,
    };
  }
}

module.exports = { USER_TABLE, UserSchema, User };
