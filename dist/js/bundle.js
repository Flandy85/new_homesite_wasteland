"use strict";

$(document).ready(function(){
	// Shrinking header when scrolling   
	$(window).on("scroll touchmove", function () {
	    $('#header-container-js').toggleClass('tiny', $(document).scrollTop() > 0);
	});
	/********************************************/
	// Click event for scrolling speed each section
	$("#menu-start-js").on("click", function () {
	 	$('html, body').animate({
		    scrollTop: $("#Start").offset().top
		}, 1000);
	});

	$("#menu-about").on("click", function () {
	 	$('html, body').animate({
		    scrollTop: $("#About").offset().top
		}, 1000);
	});

	$("#menu-contact").on("click", function () {
	 	$('html, body').animate({
		    scrollTop: $("#Contact").offset().top
		}, 1000);
	});
	$("#menu-projects").on("click", function () {
	 	$('html, body').animate({
		    scrollTop: $("#Projects").offset().top
		}, 1000);
	});	
	/********************************************/
	
});


