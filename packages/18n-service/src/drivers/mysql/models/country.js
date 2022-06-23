const { Model, DataTypes } = require('sequelize');
const { LOCALE_TABLE } = require('./locale');
const { CURRENCY_TABLE } = require('./currency');

const COUNTRY_TABLE = 'country';

const CountrySchema = {
  id: {
    type: DataTypes.STRING(6),
    primaryKey: true,
  },
  nameEs: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  nameEn: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  dialCode: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: null,
  },
  payPalAccepted: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
  cardsAccepted: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
  localeId: {
    field: 'locale_id',
    allowNull: false,
    type: DataTypes.STRING(3),
    unique: true,
    references: {
      model: LOCALE_TABLE,
      key: 'id',
    },
  },
  currencyId: {
    field: 'currency_id',
    allowNull: false,
    type: DataTypes.STRING(3),
    unique: true,
    references: {
      model: CURRENCY_TABLE,
      key: 'id',
    },
  },
};

class Country extends Model {
  static associate(models) {
    this.belongsTo(models.Locale, { as: 'locale',foreignKey: {  name: 'localeId',  allowNull: false,  defaultValue: 'es' } });
    this.belongsTo(models.Currency, { as: 'currency', foreignKey: { name: 'currencyId', allowNull: false } });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: COUNTRY_TABLE,
      modelName: 'country',
    };
  }
}

module.exports = { COUNTRY_TABLE, CountrySchema, Country };
