const { TimeZone, TimeZoneSchema } = require('./timezoneModel');

function setupModels(sequelize) {
  TimeZone.init(TimeZoneSchema, TimeZone.config(sequelize));

  TimeZone.associate(sequelize.models);
}

module.exports = setupModels;
