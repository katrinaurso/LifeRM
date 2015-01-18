dashboard.controller('Contacts', function($scope, ContactFactory){
	$scope.contacts = ContactFactory.getContacts();
});