dashboard.controller('Contacts', function($scope, ContactFactory){
	ContactFactory.getContacts(function(data){
		$scope.contacts = data;
	});
});

dashboard.controller('Main', function($scope, MainFactory){
	MainFactory.getContacts(function(data){
		var array = data;
		var pictures = [];
		for(var i=0; i<8; i++){
			var random = Math.floor(Math.random()*array.length);
			pictures.push(array[random]);
			array.splice(random, 1);
		}
		$scope.contacts = pictures;
	});
});

dashboard.controller('NewContact', function($scope, NewContactFactory){
	$scope.addContact = function(){
		NewContactFactory.addContact($scope.new_contact);
	};
	$scope.errors = NewContactFactory.getErrors();
});

dashboard.controller('MyContact', function($scope, $routeParams, MyContactFactory){
	MyContactFactory.getContactInfo($routeParams.id, function(data){
		$scope.contact = data;
	});
	$scope.removeContact = function(id){
		console.log(id);
		MyContactFactory.removeContact(id);
	};
});