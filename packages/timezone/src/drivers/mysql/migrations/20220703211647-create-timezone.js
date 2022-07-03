const { TimeZoneSchema, TIME_ZONE_TABLE } = require('../models/timezoneModel');

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(TIME_ZONE_TABLE, TimeZoneSchema);
  },

  async down(queryInterface) {
    await queryInterface.dropTable(TIME_ZONE_TABLE);
  },
};
