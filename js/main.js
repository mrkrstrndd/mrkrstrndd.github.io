var app = angular.module('app', ['ngAnimate']);

app.controller('headerController', function($scope){

	$scope.top = false;	
	$scope.home = function(){
		$scope.top = false;	
	}
	
	$scope.loc = function(){
		$scope.top = true;	
	}
})