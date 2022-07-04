const { Model, DataTypes } = require('sequelize');

const RECOVERY_TABLE = 'Recovery';

const RecoverySchema = {
  id: {
    type: DataTypes.STRING(64),
    primaryKey: true,
  },
  redeemedAt: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: null,
    field: 'redeemed_at',
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

class Recovery extends Model {
  static associate(models) {}

  static config(sequelize) {
    return {
      sequelize,
      tableName: RECOVERY_TABLE,
      modelName: 'Recovery',
      timestamps: true,
    };
  }
}

module.exports = { RECOVERY_TABLE, RecoverySchema, Recovery };
