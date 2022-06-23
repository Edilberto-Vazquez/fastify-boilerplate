const { Model, DataTypes } = require('sequelize');
const { COUNTRY_TABLE } = require('./country');

const REGION_TABLE = 'region';

const RegionSchema = {
  id: {
    type: DataTypes.STRING(50),
    primaryKey: true,
  },
  nameEs: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  nameEn: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  countryId: {
    field: 'country_id',
    allowNull: false,
    type: DataTypes.STRING(6),
    unique: true,
    references: {
      model: COUNTRY_TABLE,
      key: 'id',
    },
  },
};

class Region extends Model {
  static associate(models) {
    this.belongsTo(models.Country, {
      as: 'country',
      foreignKey: { name: 'countryId', allowNull: false },
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: REGION_TABLE,
      modelName: 'region',
    };
  }
}

module.exports = { REGION_TABLE, RegionSchema, Region };
