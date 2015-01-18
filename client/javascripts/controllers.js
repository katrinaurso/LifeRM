dashboard.controller('Contacts', function($scope, ContactFactory){
	$scope.contacts = ContactFactory.getContacts();
	$scope.addContact = function(){
		ContactFactory.addContact($scope.new_contact);
	};
});