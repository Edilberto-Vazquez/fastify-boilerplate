const { Locale, LocaleSchema } = require('./locale');
const { Currency, CurrencySchema } = require('./currency');
const { Country, CountrySchema } = require('./country');
const { Region, RegionSchema } = require('./region');

function setupModels(sequelize) {
  Locale.init(LocaleSchema, Locale.config(sequelize));
  Currency.init(CurrencySchema, Currency.config(sequelize));
  Country.init(CountrySchema, Country.config(sequelize));
  Region.init(RegionSchema, Region.config(sequelize));

  Locale.associate(sequelize.models);
  Currency.associate(sequelize.models);
  Country.associate(sequelize.models);
  Region.associate(sequelize.models);
}

module.exports = setupModels;
