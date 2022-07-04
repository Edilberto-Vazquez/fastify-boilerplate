const { Model, DataTypes } = require('sequelize');
const { AGENT_SESSION_TABLE } = require('./agentSession');

const SESSION_TABLE = 'Session';

const SessionSchema = {
  id: {
    type: DataTypes.STRING(10),
    primaryKey: true,
  },
  loggedOutAt: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: null,
    field: 'logged_out_at',
  },
  connected: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
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
};

class Session extends Model {
  static associate(models) {
    this.belongsTo(models.AgentSession, {
      as: 'agent',
      foreignKey: {
        name: 'agent_id',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: SESSION_TABLE,
      modelName: 'Session',
      timestamps: true,
    };
  }
}

module.exports = { SESSION_TABLE, SessionSchema, Session };
