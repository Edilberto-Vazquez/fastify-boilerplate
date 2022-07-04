const { Model, DataTypes } = require('sequelize');
const cryptoRandomString = require('crypto-random-string');

const EMAIL_TABLE = 'Emails';

const EmailSchema = {
  id: {
    type: DataTypes.STRING(10),
    primaryKey: true,
    defaultValue: () => cryptoRandomString({ type: 'url-safe', length: 10 }),
  },
  text: {
    type: DataTypes.TEXT,
  },
  textFlowed: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  html: {
    type: DataTypes.TEXT,
  },
  fromEmail: {
    type: DataTypes.STRING(128),
    allowNull: false,
  },
  fromName: {
    type: DataTypes.STRING(512),
    allowNull: true,
    defaultValue: null,
  },
  toEmail: {
    type: DataTypes.STRING(128),
    allowNull: false,
  },
  toName: {
    type: DataTypes.STRING(512),
    allowNull: true,
    defaultValue: null,
  },
  subject: {
    type: DataTypes.STRING(512),
    allowNull: true,
    defaultValue: null,
  },
};

class Email extends Model {
  static associate(models) {}

  static config(sequelize) {
    return {
      sequelize,
      tableName: EMAIL_TABLE,
      modelName: 'Email',
      timestamps: true,
      paranoid: true,
    };
  }
}

module.exports = { EMAIL_TABLE, EmailSchema, Email };
