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
	$scope.pictures = contacts;
});

dashboard.controller('myContact', function($scope){
	$scope.init = function(id){
		$scope.id = id;
	}
	// myContactFactory.getContactInfo(function(data){
	// 	$scope.contactInfo = data;
	// });
});