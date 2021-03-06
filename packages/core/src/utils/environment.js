const dotenv = require('dotenv');
const { join } = require('path');

const { supportedEnvs } = require('./constants');

let environment;
let path;

const filename = '.env';
switch (process.env.NODE_ENV) {
  case supportedEnvs.PRODUCTION: {
    environment = '';
    path = `${join(__dirname, '../../../..')}/${filename}`;
    break;
  }
  case supportedEnvs.TEST: {
    environment = 'TEST_';
    path = `${join(__dirname, '../../../..')}/${filename}`;
    break;
  }
  default: {
    environment = 'DEV_';
    path = `${join(__dirname, '../../../..')}/${filename}`;
  }
}

dotenv.config({ path });

module.exports = environment;
