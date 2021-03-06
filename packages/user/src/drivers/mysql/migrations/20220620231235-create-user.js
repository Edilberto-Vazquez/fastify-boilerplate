const { UserSchema, USER_TABLE } = require('../models/user');
const { PaymentMethodSchema, PAYMENT_METHOD_TABLE } = require('../models/paymentMethod');
const { UserSearchSchema, USER_SEARCH_TABLE } = require('../models/userSearch');

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(USER_TABLE, UserSchema);
    await queryInterface.createTable(PAYMENT_METHOD_TABLE, PaymentMethodSchema);
    await queryInterface.createTable(USER_SEARCH_TABLE, UserSearchSchema);
  },

  async down(queryInterface) {
    await queryInterface.dropTable(USER_TABLE);
    await queryInterface.dropTable(PAYMENT_METHOD_TABLE);
    await queryInterface.dropTable(USER_SEARCH_TABLE);
  },
};
