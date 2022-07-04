const { Model, DataTypes } = require('sequelize');
const { USER_TABLE } = require('./user');

const USER_SEARCH_TABLE = 'UserSearches';

const UserSearchSchema = {
  id: {
    type: DataTypes.STRING(10),
    primaryKey: true,
  },
  searchId: {
    type: DataTypes.STRING(50),
    field: 'search_id',
  },
  countryId: {
    type: DataTypes.STRING(10),
    allowNull: false,
    field: 'country_id',
  },
  countryValue: {
    type: DataTypes.STRING(20),
    allowNull: false,
    field: 'country_value',
  },
  regimeType: {
    type: DataTypes.STRING(20),
    allowNull: false,
    field: 'regime_type',
  },
  subType: {
    type: DataTypes.STRING(20),
    allowNull: false,
    field: 'sub_type',
  },
  query: {
    type: DataTypes.STRING(40),
    allowNull: false,
  },
  searchFields: {
    type: DataTypes.STRING(20),
    allowNull: false,
    field: 'search_fields',
  },
  startDate: {
    type: DataTypes.DATE,
    allowNull: false,
    field: 'start_date',
  },
  endDate: {
    type: DataTypes.DATE,
    allowNull: false,
    field: 'and_date',
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
  userId: {
    field: 'user_id',
    allowNull: false,
    type: DataTypes.STRING(10),
    references: {
      model: USER_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
};

class UserSearch extends Model {
  static associate(models) {
    this.belongsTo(models.User, {
      as: 'user',
      foreignKey: { name: 'userId', allowNull: true },
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: USER_SEARCH_TABLE,
      modelName: 'UserSearch',
      timestamps: true,
      paranoid: true,
    };
  }
}

module.exports = { USER_SEARCH_TABLE, UserSearchSchema, UserSearch };
