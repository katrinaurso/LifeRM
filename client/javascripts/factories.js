dashboard.factory('ContactFactory', function($http){
	var factory = {};
	var contacts = [];
	var errors = [];
	factory.getContacts = function(callback){ // Something is super not right here...
		$http.get('/get_contacts').success(function(output){
			contacts = output;
			callback(contacts);
		});
	};
	factory.getErrors = function(){
		return errors;
	};
	factory.addContact = function(info){
		for(var i=0; i<contacts.length; i++){
			if(contacts[i].first_name === info.first_name && contacts[i].last_name === info.last_name){	
				errors.push({message: 'That contact is already in your phonebook.'});
				return;
			}
		}
		$http.post('/add_contact', info).success(function(output){
			contacts.push({
				first_name: info.first_name,
				last_name: info.last_name,
				picture: '/images/test.jpg'
			});
		});	
		errors = [];		
	}
	return factory;
});

dashboard.factory('MainFactory', function($http){
	var factory = {};
	var pictures = [];
	factory.getPictures = function(callback){
		$http.get('/get_pictures').success(function(output){
			pictures = output;
			callback(pictures);
		});

	};
	return factory;
})