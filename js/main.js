var app = angular.module('app', ['ngAnimate']);

app.controller('headerController', function($scope){

	$scope.haha = true;	
	$scope.home = function(){
		$scope.haha = !this.haha;
	}


	$scope.loc = function(){
		console.log('loc')
	}
})