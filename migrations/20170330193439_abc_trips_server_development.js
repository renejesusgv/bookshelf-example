
exports.up = function(knex, Promise) {
  
  return Promise.all([

    knex.schema.createTable('salesmen', function(table) {  
	    table.increments();
	    table.integer('xid');
	    table.timestamps();
	})
  ])  
};

exports.down = function(knex, Promise) {
	return Promise.all([
		knex.schema.dropTable('salesmen')
	])  
};
