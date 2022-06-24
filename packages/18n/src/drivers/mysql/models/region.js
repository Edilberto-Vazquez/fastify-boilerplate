const { Model, DataTypes } = require('sequelize');
const { COUNTRY_TABLE } = require('./country');

const REGION_TABLE = 'Regions';

const RegionSchema = {
  id: {
    type: DataTypes.STRING(50),
    primaryKey: true,
  },
  nameEs: {
    field: "name_es",
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  nameEn: {
    field: "name_en",
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  countryId: {
    field: 'country_id',
    allowNull: false,
    type: DataTypes.STRING(6),
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
      modelName: 'Region',
    };
  }
}

module.exports = { REGION_TABLE, RegionSchema, Region };
