const { User, UserSchema } = require('./userModel');
// const { Password, PasswordSchema } = require('./passwordModel');
const { PaymentMethod, PaymentMethodSchema } = require('./paymentMethodModel');
const { UserSearch, UserSearchSchema } = require('./userSearchModel');

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  // Password.init(PasswordSchema, Password.config(sequelize));
  PaymentMethod.init(PaymentMethodSchema, PaymentMethod.config(sequelize));
  UserSearch.init(UserSearchSchema, UserSearch.config(sequelize));

  User.associate(sequelize.models);
  // Password.associate(sequelize.models);
  PaymentMethod.associate(sequelize.models);
  UserSearch.associate(sequelize.models);
}

module.exports = setupModels;
