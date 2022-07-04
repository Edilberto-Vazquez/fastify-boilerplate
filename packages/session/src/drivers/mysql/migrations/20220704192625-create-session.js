const { ClientOSSchema, CLIENT_OS_TABLE } = require('../models/clientOS');
const { ClientBrowserSchema, CLIENT_BROWSER_TABLE } = require('../models/clientBrowser');
const { ClientPlatformSchema, CLIENT_PLATFORM_TABLE } = require('../models/clientPlatform');
const { AgentSessionSchema, AGENT_SESSION_TABLE } = require('../models/agentSession');
const { RemoteAddressSchema, REMOTE_ADDRESS_TABLE } = require('../models/remoteAddress');
const { RemoteSessionSchema, REMOTE_SESSION_TABLE } = require('../models/remoteSession');
const { SessionSchema, SESSION_TABLE } = require('../models/session');
const { RecoverySchema, RECOVERY_TABLE } = require('../models/recovery');

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(CLIENT_OS_TABLE, ClientOSSchema);
    await queryInterface.createTable(CLIENT_BROWSER_TABLE, ClientBrowserSchema);
    await queryInterface.createTable(CLIENT_PLATFORM_TABLE, ClientPlatformSchema);
    await queryInterface.createTable(AGENT_SESSION_TABLE, AgentSessionSchema);
    await queryInterface.createTable(REMOTE_ADDRESS_TABLE, RemoteAddressSchema);
    await queryInterface.createTable(REMOTE_SESSION_TABLE, RemoteSessionSchema);
    await queryInterface.createTable(SESSION_TABLE, SessionSchema);
    await queryInterface.createTable(RECOVERY_TABLE, RecoverySchema);
  },

  async down(queryInterface) {
    await queryInterface.dropTable(CLIENT_OS_TABLE);
    await queryInterface.dropTable(CLIENT_BROWSER_TABLE);
    await queryInterface.dropTable(CLIENT_PLATFORM_TABLE);
    await queryInterface.dropTable(AGENT_SESSION_TABLE);
    await queryInterface.dropTable(REMOTE_ADDRESS_TABLE);
    await queryInterface.dropTable(REMOTE_SESSION_TABLE);
    await queryInterface.dropTable(SESSION_TABLE);
    await queryInterface.dropTable(RECOVERY_TABLE);
  },
};
