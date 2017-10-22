"use strict";

//Mobile meny
var slidebar_width  = 290; //slidebar width + padding size
var slide_bar       = $(".side-menu-wrapper"); //slidebar
var slide_open_btn  = $(".slide-menu-open"); //slidebar close btn
var slide_close_btn = $(".menu-close"); //slidebar close btn
var overlay         = $(".side-menu-overlay"); //slidebar close btn

slide_open_btn.click(function(e){
    e.preventDefault();
    slide_bar.css( {"right": "0px"}); //change to "right" for right positioned menu
    overlay.css({"opacity":"1", "width":"100%"});
});
slide_close_btn.click(function(e){
    e.preventDefault();
    slide_bar.css({"right": "-"+ slidebar_width + "px"});
    overlay.css({"opacity":"0", "width":"0"});
});

$(document).ready(function(){
	// Shrinking header when scrolling   
	$(window).on("scroll touchmove", function () {
	    $('#header-container').toggleClass('tiny', $(document).scrollTop() > 0);
	});
	/********************************************/
	// Click event for scrolling speed each section
	$("#menu-start").on("click", function () {
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


