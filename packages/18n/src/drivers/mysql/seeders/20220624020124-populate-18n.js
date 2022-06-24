const { join } = require('path');
const { utils } = require('@package/core');
const { loadSeed } = utils;

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Locales', loadSeed(join(__dirname, './locales.tsv')));
    await queryInterface.bulkInsert('Currencies', loadSeed(join(__dirname, './currencies.tsv')));
    await queryInterface.bulkInsert('Countries', loadSeed(join(__dirname, './countries.tsv')));
    await queryInterface.bulkInsert('Regions', loadSeed(join(__dirname, './regions.tsv')));
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Locales', null, {});
    await queryInterface.bulkDelete('Currencies', null, {});
    await queryInterface.bulkDelete('Countries', null, {});
    await queryInterface.bulkDelete('Regions', null, {});
  },
};
