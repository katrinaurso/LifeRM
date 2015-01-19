dashboard.controller('Contacts', function($scope, ContactFactory){
	$scope.addContact = function(){
		ContactFactory.addContact($scope.new_contact);
	};
	ContactFactory.getContacts(function(data){
		$scope.contacts = data;
	});
});

dashboard.controller('Main', function($scope) {
	// $scope.getData(function(data){
	// 	$scope.data = 'Data';
	// });
});