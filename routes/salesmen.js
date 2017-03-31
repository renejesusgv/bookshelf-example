var Model = require('./../app/models/Salesman');

/* Save a salesman */
var saveSalesman = function (req, res) {
	new Model.Salesman({
			xid: req.body.xid
	}).save()
		.then(function (salesman) {
			res.json(salesman);
		}).catch(function (error) {
			res.json(error);
		});
};

/* Get all salesmen */
var getAllSalesmen = function (req, res) {
	new Model.Salesman().fetchAll()
		.then(function (salesmen) {
			res.json(salesmen);
		}).catch(function (error) {
			res.json(error);
		});
};

/* Exports all methods */
module.exports = {
	saveSalesman: saveSalesman,
	getAllSalesmen: getAllSalesmen
};