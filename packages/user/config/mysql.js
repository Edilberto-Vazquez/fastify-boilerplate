const { configs } = require('@package/core');

const { development, production } = configs.mysqlConf;

module.exports = {
  development,
  production,
};
