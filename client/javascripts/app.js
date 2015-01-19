var dashboard = angular.module('dashboard', ['ngRoute']);
dashboard.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'views/partials/main.html',
		controller: 'Main'
	});
	// .when('/contact', {templateUrl: 'partials/main.html'});
});




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