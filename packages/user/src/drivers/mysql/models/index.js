const { User, UserSchema } = require('./userModel');
const { PaymentMethod, PaymentMethodSchema } = require('./paymentMethodModel');
const { UserSearch, UserSearchSchema } = require('./userSearchModel');

function setupUserModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  PaymentMethod.init(PaymentMethodSchema, PaymentMethod.config(sequelize));
  UserSearch.init(UserSearchSchema, UserSearch.config(sequelize));

  User.associate(sequelize.models);
  PaymentMethod.associate(sequelize.models);
  UserSearch.associate(sequelize.models);
}

module.exports = {
  setupUserModels,
};
