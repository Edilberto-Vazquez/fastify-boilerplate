const { Model, DataTypes } = require('sequelize');
const { AGENT_SESSION_TABLE } = require('./agentSession');
const { REMOTE_ADDRESS_TABLE } = require('./remoteAddress');

const REMOTE_SESSION_TABLE = 'RemoteSession';

const RemoteSessionSchema = {
  id: {
    type: DataTypes.STRING(10),
    primaryKey: true,
  },
  isDst: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
    field: 'is_dst',
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
  agentId: {
    field: 'agent_id',
    allowNull: false,
    type: DataTypes.STRING(36),
    references: {
      model: AGENT_SESSION_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  remoteAddressId: {
    field: 'remote_address_id',
    allowNull: false,
    type: DataTypes.STRING(45),
    references: {
      model: REMOTE_ADDRESS_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
};

class RemoteSession extends Model {
  static associate(models) {
    this.belongsTo(models.AgentSession, {
      as: 'agent',
      foreignKey: {
        name: 'agent_id',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
    });
    this.belongsTo(models.RemoteAddress, {
      as: 'remote_address',
      foreignKey: {
        name: 'remote_address_id',
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: REMOTE_SESSION_TABLE,
      modelName: 'RemoteSession',
      timestamps: true,
    };
  }
}

module.exports = { REMOTE_SESSION_TABLE, RemoteSessionSchema, RemoteSession };
