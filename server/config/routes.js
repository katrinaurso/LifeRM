var dash = require('./../controllers/dashboard.js');

module.exports = function Routes(app){
	app.get('/', function(req, res){
	  dash.index (req, res);
	});
	app.get('/get_contacts', function(req, res){
		dash.get_contacts(req, res);
	});
	app.post('/add_contact', function(req, res){
		dash.add_contact(req, res);
	});
};