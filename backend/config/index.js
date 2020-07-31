require('dotenv').config();

const config = {
  api: {
    port: process.env.PORT || 3000,
    cors: process.env.CORS || '*',
  },
  dev: process.env.NODE_ENV !== 'production',
};
module.exports = config;