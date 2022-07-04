const { Model, DataTypes } = require('sequelize');
const { CLIENT_OS_TABLE } = require('./clientOS');
const { CLIENT_BROWSER_TABLE } = require('./clientBrowser');
const { CLIENT_PLATFORM_TABLE } = require('./clientPlatform');

const AGENT_SESSION_TABLE = 'AgentSession';

const AgentSessionSchema = {
  id: {
    type: DataTypes.STRING(36),
    primaryKey: true,
  },
  clientBrowserVersion: {
    type: DataTypes.STRING(50),
    allowNull: true,
    defaultValue: null,
    field: 'client_browser_version',
  },
  isBot: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
    field: 'is_bot',
  },
  isMobile: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
    field: 'is_mobile',
  },
  isTablet: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
    field: 'is_tablet',
  },
  isDesktop: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
    field: 'is_desktop',
  },
  isSmartTv: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
    field: 'is_smart_tv',
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: DataTypes.NOW,
  },
  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'updated_at',
    defaultValue: DataTypes.NOW,
  },
  deletedAt: {
    allowNull: true,
    type: DataTypes.DATE,
    field: 'deleted_at',
  },
  clientOSId: {
    field: 'client_os_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: CLIENT_OS_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  clientBrowserId: {
    field: 'client_browser_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: CLIENT_BROWSER_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  clientPlatformId: {
    field: 'client_platform_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: CLIENT_PLATFORM_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
};

class AgentSession extends Model {
  static associate(models) {
    this.belongsTo(models.ClientOS, {
      as: 'client_os',
      foreignKey: 'client_os_id',
    });
    this.belongsTo(models.ClientBrowser, {
      as: 'client_browser',
      foreignKey: 'client_browser_id',
    });
    this.belongsTo(models.ClientPlatform, {
      as: 'client_platform',
      foreignKey: 'client_platform_id',
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: AGENT_SESSION_TABLE,
      modelName: 'AgentSession',
      timestamps: true,
    };
  }
}

module.exports = { AGENT_SESSION_TABLE, AgentSessionSchema, AgentSession };
