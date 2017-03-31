// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'abc_trips_server_development',
      user:     'abc',
      password: 'password'
    },
    pool: {
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
