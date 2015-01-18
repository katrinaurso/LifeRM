dashboard.factory('ContactFactory', function($http){
	var factory = {};
	var contacts = [];
	factory.getContacts = function(callback){ // Something is super not right here...
		$http.get('/get_contacts').success(function(output){
			contacts = output;
			callback(contacts);
		});
	};
	factory.addContact = function(info){
		$http.post('/add_contact', info).success(function(output){
			contacts.push({
				name: info.name
			});
		});	
	}
	return factory;
});