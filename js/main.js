$(function(){
	 $("header div.bottom-header").sticky({topSpacing:0});
	 $("header div.bottom-header").on("sticky-start", function(){
	 	
	 	$(this).children("img").animate({ 
	 		"width": "10em",
	 		"margin-top": "0.4em",
	 		"margin-bottom":"0.4em"
	 	},200);

	 	$(this).children("nav").animate({
	 		"top":"2em"
	 	},200)
	 })

	 $("header div.bottom-header").on("sticky-end", function(){
	 	
	 	$(this).children("img").animate({ 
	 		"width": "13em",
	 		"margin-top":"1em",
	 		"margin-bottom":"1em"
	 	},200);
 		$(this).children("nav").animate({
	 		"top":"3em"
	 	},200)
	 })


	 $('div.photos').slick({
	 	centerMode: true,
  		variableWidth: true,
  		dots: true,  	
  		autoplay: true,
 	    autoplaySpeed: 5000,	
  		arrow:true,
  		
	 });
});

var app = angular.module('myApp',['ui.router','slick']);

app.config(function($stateProvider, $urlRouterProvider){

	 $urlRouterProvider.otherwise("/");

	 $stateProvider

	    .state('home', {
	      url: "/",
	      templateUrl: "../partials/home.htm"
	    })

	    .state('about', {
	      url: "/about",
	      templateUrl: "../partials/about.htm",	     
	    })

      	.state('facilities', {
	      url: "/facilities",
	      templateUrl: "../partials/facilities.htm",	     
	    })

	    .state('reservations', {
	      url: "/reservations",
	      templateUrl: "../partials/reservations.htm",	     
	    })

	    .state('reviews', {
	      url: "/reviews",
	      templateUrl: "../partials/reviews.htm",	     
	    })
	   

	   .state('contacts', {
	      url: "/contacts",
	      templateUrl: "../partials/contacts.htm",	     
	    })

    })

