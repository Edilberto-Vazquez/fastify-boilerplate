const { User, UserSchema } = require('./user');
const { PaymentMethod, PaymentMethodSchema } = require('./paymentMethod');
const { UserSearch, UserSearchSchema } = require('./userSearch');

// add virtual fullname field to User
UserSchema = {
  ...UserSchema,
  fullName: {
    type: Sequelize.VIRTUAL,
    get() {
      return `${this.getDataValue('firstName')} ${this.getDataValue('lastName')}`;
    },
  },
};

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  PaymentMethod.init(PaymentMethodSchema, PaymentMethod.config(sequelize));
  UserSearch.init(UserSearchSchema, UserSearch.config(sequelize));

  User.associate(sequelize.models);
  PaymentMethod.associate(sequelize.models);
  UserSearch.associate(sequelize.models);
}

module.exports = setupModels;
