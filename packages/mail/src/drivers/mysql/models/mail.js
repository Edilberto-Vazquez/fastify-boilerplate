const { Model, DataTypes } = require('sequelize');
const cryptoRandomString = require('crypto-random-string');

const MAIL_TABLE = 'Mails';

const MailSchema = {
  id: {
    type: DataTypes.STRING(10),
    primaryKey: true,
    defaultValue: () => cryptoRandomString({ type: 'url-safe', length: 10 }),
  },
  text: {
    type: DataTypes.TEXT,
  },
  text_flowed: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  html: {
    type: DataTypes.TEXT,
  },
  from_email: {
    type: DataTypes.STRING(128),
    allowNull: false,
  },
  from_name: {
    type: DataTypes.STRING(512),
    allowNull: true,
    defaultValue: null,
  },
  to_email: {
    type: DataTypes.STRING(128),
    allowNull: false,
  },
  to_name: {
    type: DataTypes.STRING(512),
    allowNull: true,
    defaultValue: null,
  },
  subject: {
    type: DataTypes.STRING(512),
    allowNull: true,
    defaultValue: null,
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

class Mail extends Model {
  static associate(models) {}

  static config(sequelize) {
    return {
      sequelize,
      tableName: MAIL_TABLE,
      modelName: 'Mails',
      timestamps: true,
      paranoid: true,
    };
  }
}

module.exports = { MAIL_TABLE, MailSchema, Mail };
