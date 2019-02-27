// Update with your config settings.
const pg = require('pg');
pg.defaults.ssl = true;


module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./data/authDb.sqlite3"
    },
    useNullAsDefault: true,
    migrations: {
      tableName: "knex_migrations",
      directory: "./data/migrations"
    },
    seeds: { directory: "./data/seeds" }
  },

  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }
};
