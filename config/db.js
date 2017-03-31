var DBConfig = {
	client: 'pg',
	connection: {
		host: '10.1.1.10',
		port: 5432,
		user: 'abc',
		password: 'password',
		database: 'abc_trips_server_development',
		charset: 'utf8'
	}
};

var knex = require('knex')(DBConfig);
var bookshelf = require('bookshelf')(knex);

module.exports.bookshelf = bookshelf;