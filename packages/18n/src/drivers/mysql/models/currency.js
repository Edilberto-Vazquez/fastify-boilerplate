const { Model, DataTypes } = require('sequelize');

const CURRENCY_TABLE = 'currency';

const CurrencySchema = {
  id: {
    type: DataTypes.STRING(6),
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  symbol: {
    type: DataTypes.STRING(15),
    allowNull: false,
  },
  exchangeRate: {
    type: DataTypes.DECIMAL(19, 9),
    allowNull: false,
    defaultValue: 0,
  },
};

class Currency extends Model {
  static associate(models) {
    this.hasOne(models.Country, { as:'country', foreignKey: { name: 'currencyId', allowNull: true } });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: CURRENCY_TABLE,
      modelName: 'currency',
    };
  }
}

module.exports = { CURRENCY_TABLE, CurrencySchema, Currency };
