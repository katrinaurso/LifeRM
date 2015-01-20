dashboard.factory('ContactFactory', function($http){
	var factory = {};
	factory.getContacts = function(callback){ // Something is super not right here...
		$http.get('/get_contacts').success(function(output){
			contacts = output;
			callback(contacts);
		});
	};
	return factory;
});

dashboard.factory('MainFactory', function($http){
	var factory = {};
	var contacts_main = [];
	factory.getContacts = function(callback){ // Something is super not right here...
		$http.get('/get_contacts').success(function(output){
			contacts_main = output;
			callback(contacts_main);
		});
	};
	return factory;
});

dashboard.factory('NewContactFactory', function($http){
	var factory = {};
	var errors = [];
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

dashboard.factory('MyContactFactory', function($routeParams, $http){
	var factory = {};
	var contact = [];
	factory.getContactInfo = function(id){ // object is deep in another object....
		$http.get('/get_contact_info/'+id).success(function(output){
			contact = output;
			console.log(contact[0]);
			return contact[0];		
		});
	};
	return factory;
});