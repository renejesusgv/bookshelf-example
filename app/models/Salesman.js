var bookshelf = require('./../../config/db').bookshelf;

var Salesman = bookshelf.Model.extend({
  tableName: 'salesmen'
});

module.exports = {
  Salesman: Salesman
};