const environment = require('../src/utils/environment');

const config = {
  logging: false,
  dialect: 'mysql',
  host: process.env[`${environment}MYSQL_HOST`],
  port: process.env[`${environment}MYSQL_PORT`],
  username: process.env[`${environment}MYSQL_USER_NAME`],
  password: process.env[`${environment}MYSQL_USER_PASS`],
  database: process.env[`${environment}MYSQL_DATA_BASE`],
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
