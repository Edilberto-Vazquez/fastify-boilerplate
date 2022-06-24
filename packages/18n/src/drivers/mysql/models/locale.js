const { Model, DataTypes } = require('sequelize');

const LOCALE_TABLE = 'Locales';

const LocaleSchema = {
  id: {
    type: DataTypes.STRING(2),
    primaryKey: true,
  },
  nativeName: {
    field: 'native_name',
    type: DataTypes.STRING(100),
    allowNull: false,
  },
};

class Locale extends Model {
  static associate(models) {
    this.hasOne(models.Country, {
      as: 'country',
      foreignKey: { name: 'localeId', allowNull: true },
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: LOCALE_TABLE,
      modelName: 'Locale',
    };
  }
}

module.exports = { LOCALE_TABLE, LocaleSchema, Locale };
