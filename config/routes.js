// var dahsboard = require('./../server/controllers/dashboard.js');

module.exports = function Routes(app){
	app.get('/', function(req, res) {
	  res.render('index', { title: 'LifeRM' });
	});
};