var mongoose = require('mongoose');
var Contact = mongoose.model('Contact');

module.exports = {
	index: function(req, res){
		res.render('index', {title: 'LifeRM'});		
	},
	get_contacts: function(req, res){
		Contact.find(function(err, results){
			if(err) {
				res.send(err);
			} else {
				res.send(results);
			}
		});
	},
	add_contact: function(req, res){
		var a = new Contact(req.body);
		a.save(function(err, result){
			if(err){
				res.send(err);
			} else {
				res.send(result._id);
			}
		});
	}
}