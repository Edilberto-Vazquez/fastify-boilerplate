const { Model, DataTypes } = require('sequelize');

const TIME_ZONE_TABLE = 'TimeZones';

const TimeZoneSchema = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  gmtOffset: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  gmtOffsetDst: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
};

class TimeZone extends Model {
  static associate(models) {}

  static config(sequelize) {
    return {
      sequelize,
      tableName: TIME_ZONE_TABLE,
      modelName: 'TimeZone',
      timestamps: true,
      paranoid: true,
    };
  }
}

module.exports = { TIME_ZONE_TABLE, TimeZoneSchema, TimeZone };
