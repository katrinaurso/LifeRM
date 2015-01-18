dashboard.factory('ContactFactory', function(){
	var factory = {};
	factory.getContacts = function(){
		return contacts;
	};
	return factory;
});