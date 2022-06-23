const { User, UserSchema, USER_TABLE } = require('./userModel');
// const { Password, PasswordSchema } = require('./passwordModel');
const { PaymentMethod, PaymentMethodSchema, PAYMENT_METHOD_TABLE } = require('./paymentMethodModel');
const { UserSearch, UserSearchSchema, USER_SEARCH_TABLE } = require('./userSearchModel');

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

module.exports = {
  setupModels,
  UserModel: {
    UserSchema,
    USER_TABLE
  },
  PaymentMethodModel: {
    PaymentMethodSchema,
    PAYMENT_METHOD_TABLE
  },
  UserSearchModel: {
    UserSearchSchema,
    USER_SEARCH_TABLE
  },
};
