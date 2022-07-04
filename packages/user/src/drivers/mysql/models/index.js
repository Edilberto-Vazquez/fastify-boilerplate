const { User, UserSchema } = require('./user');
const { PaymentMethod, PaymentMethodSchema } = require('./paymentMethod');
const { UserSearch, UserSearchSchema } = require('./userSearch');

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  PaymentMethod.init(PaymentMethodSchema, PaymentMethod.config(sequelize));
  UserSearch.init(UserSearchSchema, UserSearch.config(sequelize));

  User.associate(sequelize.models);
  PaymentMethod.associate(sequelize.models);
  UserSearch.associate(sequelize.models);
}

module.exports = setupModels;
