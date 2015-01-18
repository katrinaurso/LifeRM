var dashboard = require('./../controllers/dashboard.js');

module.exports = function Routes(app){
	app.get('/', function (req, res) {
	  dashboard.index (req, res);
	});
};