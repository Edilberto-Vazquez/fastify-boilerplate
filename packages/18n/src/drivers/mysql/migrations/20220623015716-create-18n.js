const { LOCALE_TABLE, LocaleSchema } = require('../models/locale');
const { CURRENCY_TABLE, CurrencySchema } = require('../models/currency');
const { COUNTRY_TABLE, CountrySchema } = require('../models/country');
const { REGION_TABLE, RegionSchema } = require('../models/region');

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(LOCALE_TABLE, LocaleSchema);
    await queryInterface.createTable(CURRENCY_TABLE, CurrencySchema);
    await queryInterface.createTable(COUNTRY_TABLE, CountrySchema);
    await queryInterface.createTable(REGION_TABLE, RegionSchema);
  },

  async down(queryInterface) {
    await queryInterface.dropTable(LOCALE_TABLE, LocaleSchema);
    await queryInterface.dropTable(CURRENCY_TABLE, CurrencySchema);
    await queryInterface.dropTable(COUNTRY_TABLE, CountrySchema);
    await queryInterface.dropTable(REGION_TABLE, RegionSchema);
  },
};
