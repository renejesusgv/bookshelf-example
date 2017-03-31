knex.schema.createTableIfNotExists('salesmen', function(table) {  
    table.increments();
    table.integer('xid');
    table.timestamps();
});