require('dotenv').config();

module.exports = {
  database: process.env.DATABASE,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PWD,
  dialect: 'mysql',
};
