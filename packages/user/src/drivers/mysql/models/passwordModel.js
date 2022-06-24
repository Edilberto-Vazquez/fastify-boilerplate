const { Model, DataTypes } = require('sequelize');
const { USER_TABLE } = require('./userModel');

const PASSWORD_TABLE = 'passwords';


const PasswordSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  password: {
    type: DataTypes.STRING(64),
    allowNull: false,
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
      model: {
        tableName: 'users',
      },
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
};

class Password extends Model {
  static associate(models) {
    this.belongsTo(models.User, {
      as: 'user',
      foreignKey: { name: 'userId', allowNull: false },
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: PASSWORD_TABLE,
      modelName: 'Password',
      timestamps: true,
      paranoid: true,
    };
  }
}

module.exports = { PASSWORD_TABLE, PasswordSchema, Password };
