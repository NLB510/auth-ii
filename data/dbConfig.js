require('dotenv').config();

const knex = require('knex');

const knexConfig = require('../knexfile');

const environment = process.env.ENVIRONMENT || 'development';

module.exports = (knexConfig[environment]);