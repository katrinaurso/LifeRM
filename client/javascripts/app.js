var dashboard = angular.module('dashboard', []);
dashboard.controller('Contacts', function($scope){
	var contacts = [
		{name: 'Katrina'},
		{name: 'Tim'}
	];
	$scope.contacts = contacts;
})