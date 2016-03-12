var app = angular.module('myApp',['ui.router','slick']);

app.controller('myController', function($scope){
	$scope.initialize = function(){
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
	}

	$scope.customer = {
    name: 'Naomi',
    address: '1600 Amphitheatre'
  };
});

app.directive('myTextbox', ['$document', function($document) {
  return {
    link: function(scope, element, attr) {
    	

    	element.on('keyup', hehe);

    	function hehe(event){
    		console.log(event.target.innerText);
    	}

      // var startX = 0, startY = 0, x = 0, y = 0;

      // element.css({
      //  position: 'relative',
      //  border: '1px solid red',
      //  backgroundColor: 'lightgrey',
      //  cursor: 'pointer'
      // });

      // element.on('mousedown', function(event) {
      //   // Prevent default dragging of selected content
      //   event.preventDefault();
      //   startX = event.pageX - x;
      //   startY = event.pageY - y;
      //   $document.on('mousemove', mousemove);
      //   $document.on('mouseup', mouseup);
      //   console.log('haha');
      // });

      // function mousemove(event) {
      //   y = event.pageY - startY;
      //   x = event.pageX - startX;
      //   element.css({
      //     top: y + 'px',
      //     left:  x + 'px'
      //   });
      // }

      // function mouseup() {
      //   $document.off('mousemove', mousemove);
      //   $document.off('mouseup', mouseup);
      // }
    }
  };
}]);

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



$(function(){
	

});

