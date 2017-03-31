// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: '10.1.1.10',
      port : 5432,
      database: 'abc_trips_server_development',
      user:     'abc',
      password: 'password'
    },
    pool: {
      max: 10
    },
    migrations: {
      directory: __dirname + '/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds/development'
    }
  }
};
