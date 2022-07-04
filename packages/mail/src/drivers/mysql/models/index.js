const { Mail, MailSchema } = require('./mail');

function setupModels(sequelize) {
  Mail.init(MailSchema, Mail.config(sequelize));

  Mail.associate(sequelize.models);
}

module.exports = setupModels;
