$(function(){
	 $("header div.bottom-header").sticky({topSpacing:0});
	 $("header div.bottom-header").on("sticky-start", function(){
	 	console.log("stick");
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
	 	console.log("unstick");
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
  		arrow:true,
  		
	 });
});