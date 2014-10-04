var app = angular.module('portfolioApp', []);

app.filter('greet', function() {
	return function(name) {
		return 'Hello, ' + name + '!';
	};
});

app.controller('ProjectCtrl', function($scope) {
	$scope.test = "Hello World!";

});