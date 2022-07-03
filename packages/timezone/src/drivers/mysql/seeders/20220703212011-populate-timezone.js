const { join } = require('path');
const { utils } = require('@package/core');
const { loadSeed } = utils;

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('TimeZones', loadSeed(join(__dirname, './timezones.tsv')));
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Locales', null, {});
  },
};
