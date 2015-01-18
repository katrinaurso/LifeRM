dashboard.factory('ContactFactory', function(){
	var factory = {};
	factory.getContacts = function(){
		return contacts;
	};
	factory.addContact = function(info){
		contacts.push({
			name: info.name
		});
	}
	return factory;
});