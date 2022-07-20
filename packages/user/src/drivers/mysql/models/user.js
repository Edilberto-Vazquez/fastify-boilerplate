const { Model, DataTypes } = require('sequelize');

const USER_TABLE = 'Users';

const UserSchema = {
  id: {
    type: DataTypes.STRING(10),
    primaryKey: true,
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
  password: {
    type: DataTypes.STRING(64),
    allowNull: false,
  },
  countryId: {
    field: 'country_id',
    allowNull: false,
    type: DataTypes.STRING(6),
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
    allowNull: true,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: DataTypes.NOW,
  },
  updatedAt: {
    allowNull: true,
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

// add virtual fullname field to User
// this schema only works when model is initialized and not use in migrations
const UserSchemaWithVirtuals = {
  ...UserSchema,
  fullName: {
    type: DataTypes.VIRTUAL,
    get() {
      return `${this.getDataValue('firstName')} ${this.getDataValue('lastName')}`;
    },
  },
};

class User extends Model {
  static associate(models) {
    this.hasOne(models.PaymentMethod, {
      as: 'payment_method',
      foreignKey: { name: 'userId', allowNull: true },
    });
    this.hasMany(models.UserSearch, {
      as: 'user_search',
      foreignKey: { name: 'userId', allowNull: true },
    });
  }

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

module.exports = { USER_TABLE, UserSchema, UserSchemaWithVirtuals, User };
