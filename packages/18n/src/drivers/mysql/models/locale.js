const { Model, DataTypes } = require('sequelize');

const LOCALE_TABLE = 'locale';

const LocaleSchema = {
  id: {
    type: DataTypes.STRING(3),
    primaryKey: true,
  },
  nativeName: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
};

class Locale extends Model {
  static associate(models) {
    this.hasOne(models.Country, { as:'country', foreignKey: { name: 'localeId', allowNull: true } });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: LOCALE_TABLE,
      modelName: 'locale',
    };
  }
}

module.exports = { LOCALE_TABLE, LocaleSchema, Locale };
