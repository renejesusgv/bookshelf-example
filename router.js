var salesman = require('./routes/salesmen');
var index = require('./routes/index');

module.exports = function (app) {

	/* Index(main) route */
	app.get('/', index.index);

	/* User Routes */
	app.post('/salesman', salesman.saveSalesman);
	app.get('/salesmen', salesman.getAllSalesmen);
};