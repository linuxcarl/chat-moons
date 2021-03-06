require('dotenv').config();

const config = {
  api: {
    port: process.env.PORT || 3000,
    cors: process.env.CORS || '*',
  },
  db:{
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbHost: process.env.DB_HOST,
    dbName: process.env.DB_NAME,
  },
  dev: process.env.NODE_ENV !== 'production',
};
module.exports = config;