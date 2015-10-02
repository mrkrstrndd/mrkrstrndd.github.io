var app = angular.module('app', ['ui.router','ngAnimate']);

app.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("home");
  //
  // Now set up the states
  $stateProvider
    .state('home', {
      url: "/home",
      templateUrl: "partials/home.html"
    })
   
    .state('location', {
      url: "/location",
      templateUrl: "partials/location.html"
    })

    .state('history', {
      url: "/history",
      templateUrl: "partials/history.html"
    })

    .state('rates', {
      url: "/rates",
      templateUrl: "partials/rates.html"
    })

    .state('gallery', {
      url: "/gallery",
      templateUrl: "partials/gallery.html"
    })

    .state('rvsale', {
      url: "/rvsale",
      templateUrl: "partials/rvsale.html"
    })

    .state('rvsite', {
      url: "/rvsite",
      templateUrl: "partials/rvsite.html"
    })

    .state('link', {
      url: "/link",
      templateUrl: "partials/link.html"
    })

    .state('rules', {
      url: "/rules",
      templateUrl: "partials/rules.html"
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
		if(item.name === 'Home')
			$scope.top = false;
		else
			$scope.top = true;

		$scope.selected = item; 
		$state.go($scope.selected.link);
	}

	$scope.isActive = function(item){
		 return $scope.selected === item;
	}
});