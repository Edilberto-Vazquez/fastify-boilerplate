const prefix = require('../environment');

const config = {
  logging: false,
  dialect: 'mysql',
  host: process.env[`${prefix}HOST`],
  port: process.env[`${prefix}PORT`],
  username: process.env[`${prefix}USER_NAME`],
  password: process.env[`${prefix}USER_PASS`],
  database: process.env[`${prefix}DATA_BASE`],
  pool: {
    max: 5,
    idle: 30000,
    acquire: 60000,
  },
  define: {
    underscored: true,
    timestamps: true,
  },
};

module.exports = {
  development: config,
  production: config,
};
