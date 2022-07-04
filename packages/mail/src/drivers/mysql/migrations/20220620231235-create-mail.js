const { MailSchema, MAIL_TABLE } = require('../models/mail');

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(MAIL_TABLE, MailSchema);
  },

  async down(queryInterface) {
    await queryInterface.dropTable(MAIL_TABLE);
  },
};
