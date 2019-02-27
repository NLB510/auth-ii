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
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done);
      }
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./data/migrations"
    },
    seeds: { directory: "./data/seeds" }
  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    useNullAsDefault: true,
    migrations: {
      tableName: "knex_migrations",
      directory: "./data/migrations"
    },
    seeds: { directory: "./data/seeds" }
  }
};
