const { Model, DataTypes } = require('sequelize');
const { USER_TABLE } = require('./user');

const PAYMENT_METHOD_TABLE = 'PaymentMethods';

const PaymentMethodSchema = {
  id: {
    type: DataTypes.STRING(32),
    primaryKey: true,
  },
  brand: {
    type: DataTypes.ENUM('visa', 'amex', 'mastercard', 'diners', 'discover', 'jcb', 'unionpay', 'unknown'),
    defaultValue: 'unknown',
    allowNull: false,
  },
  expMonth: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'exp_month',
  },
  expYear: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'exp_year',
  },
  threeD: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
    field: 'three_d',
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
  userId: {
    field: 'user_id',
    allowNull: false,
    type: DataTypes.STRING(10),
    references: {
      model: USER_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
};

class PaymentMethod extends Model {
  static associate(models) {
    this.belongsTo(models.User, {
      as: 'user',
      foreignKey: { name: 'userId', allowNull: true },
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: PAYMENT_METHOD_TABLE,
      modelName: 'PaymentMethod',
      timestamps: true,
      paranoid: true,
    };
  }
}

module.exports = { PAYMENT_METHOD_TABLE, PaymentMethodSchema, PaymentMethod };
