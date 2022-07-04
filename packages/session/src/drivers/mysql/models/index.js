const { ClientOS, ClientOSSchema } = require('./clientOS');
const { ClientBrowser, ClientBrowserSchema } = require('./clientBrowser');
const { ClientPlatform, ClientPlatformSchema } = require('./clientPlatform');
const { AgentSession, AgentSessionSchema } = require('./agentSession');
const { RemoteAddress, RemoteAddressSchema } = require('./remoteAddress');
const { RemoteSession, RemoteSessionSchema } = require('./remoteSession');
const { Session, SessionSchema } = require('./session');
const { Recovery, RecoverySchema } = require('./recovery');

function setupModels(sequelize) {
  ClientOS.init(ClientOSSchema, ClientOS.config(sequelize));
  ClientBrowser.init(ClientBrowserSchema, ClientBrowser.config(sequelize));
  ClientPlatform.init(ClientPlatform, ClientPlatformSchema.config(sequelize));
  AgentSession.init(AgentSession, AgentSessionSchema.config(sequelize));
  RemoteAddress.init(RemoteAddress, RemoteAddressSchema.config(sequelize));
  RemoteSession.init(RemoteSession, RemoteSessionSchema.config(sequelize));
  Session.init(Session, SessionSchema.config(sequelize));
  Recovery.init(Recovery, RecoverySchema.config(sequelize));

  ClientOS.associate(sequelize.models);
  ClientBrowser.associate(sequelize.models);
  ClientPlatform.associate(sequelize.models);
  AgentSession.associate(sequelize.models);
  RemoteAddress.associate(sequelize.models);
  RemoteSession.associate(sequelize.models);
  Session.associate(sequelize.models);
  Recovery.associate(sequelize.models);
}

module.exports = setupModels;
