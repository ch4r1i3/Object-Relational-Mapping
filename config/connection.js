require('dotenv').config();

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('ecommerce_db', 'root', 'karli.2606', {
  host: 'localhost',
  dialect: 'mysql',
});
module.exports = sequelize;
