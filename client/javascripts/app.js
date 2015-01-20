var dashboard = angular.module('dashboard', ['ngRoute']);
dashboard.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'views/partials/main.html',
		controller: 'Main'
	})
	.when('/new_contact', {
		templateUrl: 'views/partials/new_contact.html',
		controller: 'NewContact'
	})
	.when('/contact/:id', {
		templateUrl: 'views/partials/contact.html',
		controller: 'MyContact'
	});
});

var contacts = [];
/// Test Section /////
// var dashboard = angular.module('dashboard', ['ui-router']);
// dashboard.config(function($stateProvider, $urlRouterProvider){
// 	$urlRouterProvider.otherwise('/home');
// 	$stateProvider
// 		.state('home', {
// 			url: '/',
// 			templateUrl: 'partials/main.html'
// 		});
// });
//  dashboard.config(['$compileProvider', function($compileProvider) {
//     $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|file|blob|content):|data:image\//);
// }]);