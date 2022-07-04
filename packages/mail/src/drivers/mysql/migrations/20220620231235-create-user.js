const { EmailSchema, EMAIL_TABLE } = require('../models/mail');

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(EMAIL_TABLE, EmailSchema);
  },

  async down(queryInterface) {
    await queryInterface.dropTable(EMAIL_TABLE);
  },
};
