var app = angular.module('app', ['ui.router','ngAnimate']);

app.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("theme1");
  //
  // Now set up the states
  $stateProvider
    .state('theme1', {
      url: "/theme1",
      templateUrl: "partials/theme1.html"
    })
   
    .state('theme2', {
      url: "/theme2",
      templateUrl: "partials/theme2.html"
    })

    .state('theme3', {
      url: "/history",
      templateUrl: "partials/theme3.html"
    })

  
});

app.controller('headerController', function($scope,$state,$stateParams){
	
	$scope.menuTitle = [
		{ "name" : "Home" , "link" : "home"},
		{ "name" : "Location-Contact", "link" : "location" },
		{ "name" : "History" , "link" : "history"},
		{ "name" : "Rates" , "link" : "rates"},
		{ "name" : "Picture Gallery", "link" : "gallery" },
		{ "name" : "RVs For Sale" , "link" : "rvsale"},
		{ "name" : "RV Sites" , "link" : "rvsite"},
		{ "name" : "Links", "link" : "link" },
		{ "name" : "Park Rules" , "link" : "rules"},
	];

	$scope.rates = [
		{ "name" : "Seasonal" , "rate" : "$1095.00"},
		{ "name" : "Monthly (50 Amp)" , "rate" : "$390.00"},
		{ "name" : "Monthly (30 Amp)" , "rate" : "$360.00"},
		{ "name" : "Weekly (50 Amp)" , "rate" : "$172.00"},
		{ "name" : "Weekly (30 Amp)" , "rate" : "$160.00"},
		{ "name" : "Daily (50 Amp)" , "rate" : "$29.00"},
		{ "name" : "Daily (30 Amp)" , "rate" : "$27.00"},
	];

	$scope.selected = $scope.menuTitle[0];
	$scope.top = false;

	$scope.select = function(item){
		// if(item.name === 'Home')
		// 	$scope.top = false;
		// else
		// 	$scope.top = true;

		// $scope.selected = item; 
		// $state.go($scope.selected.link);
    console.log("haha");
	}

	$scope.isActive = function(item){
		 return $scope.selected === item;
	}
});