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
		$scope.pictures = pictures;
	});
});

dashboard.controller('NewContact', function($scope, NewContactFactory){
	$scope.addContact = function(){
		NewContactFactory.addContact($scope.new_contact);
	};
});

dashboard.controller('myContact', function($scope){
	$scope.init = function(id){
		$scope.id = id;
	}
	// myContactFactory.getContactInfo(function(data){
	// 	$scope.contactInfo = data;
	// });
});