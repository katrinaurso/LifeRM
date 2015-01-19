dashboard.controller('Contacts', function($scope, ContactFactory){
	$scope.addContact = function(){
		ContactFactory.addContact($scope.new_contact);
	};
	ContactFactory.getContacts(function(data){
		$scope.contacts = data;
	});
	$scope.errors = ContactFactory.getErrors();
});

dashboard.controller('Main', function($scope, MainFactory){
	MainFactory.getPictures(function(data){
		$scope.pictures = data;
	});
});