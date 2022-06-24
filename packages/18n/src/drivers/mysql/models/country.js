const { Model, DataTypes } = require('sequelize');
const { LOCALE_TABLE } = require('./locale');
const { CURRENCY_TABLE } = require('./currency');

const COUNTRY_TABLE = 'Countries';

const CountrySchema = {
  id: {
    type: DataTypes.STRING(6),
    primaryKey: true,
  },
  nameEs: {
    field: "name_es",
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  nameEn: {
    field: "name_en",
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  dialCode: {
    field: "dial_code",
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: null,
  },
  payPalAccepted: {
    field:"paypal_accepted",
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
  cardsAccepted: {
    field: "cards_accepted",
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
  localeId: {
    field: 'locale_id',
    allowNull: false,
    type: DataTypes.STRING(3),
    references: {
      model: LOCALE_TABLE,
      key: 'id',
    },
  },
  currencyId: {
    field: 'currency_id',
    allowNull: false,
    type: DataTypes.STRING(3),
    references: {
      model: CURRENCY_TABLE,
      key: 'id',
    },
  },
};

class Country extends Model {
  static associate(models) {
    this.belongsTo(models.Locale, { as: 'locale', foreignKey: {  name: 'localeId',  allowNull: false,  defaultValue: 'es' } });
    this.belongsTo(models.Currency, { as: 'currency', foreignKey: { name: 'currencyId', allowNull: false } });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: COUNTRY_TABLE,
      modelName: 'Country',
    };
  }
}

module.exports = { COUNTRY_TABLE, CountrySchema, Country };
