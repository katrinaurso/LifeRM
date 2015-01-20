var mongoose = require('mongoose');
var Contact = mongoose.model('Contact');
/// Testing for image upload ///
// var uuid = require('node-uuid'),
// 	multiparty = require('multiparty'),
// 	fs = require('fs');

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
	},
	get_pictures: function(req, res){
		Contact.find(function(err, results){
			if(err){
				res.send(err);
			} else {
				res.send(results);
			}
		});
	},
	get_contact_info: function(req, res){
		Contact.find({_id : req.params.id}, function(err, results){
			if(err){
				res.send(err);
			} else {
				res.send(results);
			}
		});
	},
	remove_contact: function(req, res){
		console.log(req.params.id);
		Contact.remove({_id: req.params.id}, function(status){
			if(err){
				console.log(err);
				res.sendStatus(err);
			} else {
				console.log(status);
				res.sendStatus(status);
			}
		});
	}
	// , upload: function(req, res){
	// 	var form = new multiparty.Form();
	// 	form.parse(req, function(err, fields, files) {
	// 		var file = files.file[0];
	//         var contentType = file.headers['content-type'];
	//         var tmpPath = file.path;
	//         var extIndex = tmpPath.lastIndexOf('.');
	//         var extension = (extIndex < 0) ? '' : tmpPath.substr(extIndex);
	//         // uuid is for generating unique filenames. 
	//         var fileName = uuid.v4() + extension;
	//         var destPath = '/client/images/' + fileName;

	//         // Server side file type checker.
	//         if (contentType !== 'image/png' && contentType !== 'image/jpeg') {
	//             fs.unlink(tmpPath);
	//             return res.status(400).send('Unsupported file type.');
	//         }

	//         fs.rename(tmpPath, destPath, function(err) {
	//             if (err) {
	//                 return res.status(400).send('Image is not saved:');
	//             }
	//             return res.json(destPath);
	//         });
	// 	});
	// }
};