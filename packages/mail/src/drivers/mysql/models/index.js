const { Email, EmailSchema } = require('./mail');

function setupModels(sequelize) {
  Email.init(EmailSchema, Email.config(sequelize));

  Email.associate(sequelize.models);
}

module.exports = setupModels;
