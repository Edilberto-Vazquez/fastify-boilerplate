const prefix = require('./environment');

const config = {
  logging: false,
  dialect: 'mysql',
  host: process.env[`${prefix}MYSQL_HOST`],
  port: process.env[`${prefix}MYSQL_PORT`],
  username: process.env[`${prefix}MYSQL_USER_NAME`],
  password: process.env[`${prefix}MYSQL_USER_PASS`],
  database: process.env[`${prefix}MYSQL_DATA_BASE`],
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
