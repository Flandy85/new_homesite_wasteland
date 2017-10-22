<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
    <meta name="description" content="Personal portfolio site">
    <meta name="keywords" content="HTML,CSS,JavaScript">
    <meta name="author" content="Anders Gustavsson">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>wastelandsolution</title>
    <link href="https://fonts.googleapis.com/css?family=Bowlby+One+SC" rel="stylesheet">
	<link rel="stylesheet" type="text/css" href="./dist/css/style.css">
</head>
<body>
<header class="header-container" id="header-container">
	<nav class="menu-container">
		<img src="./assets/images/wastelandsolution.png" class="header-logo" alt="logo for website, text which says wastelandsolution">
		<div class="menu" id="menu-start"><a href="#Start" id="menu-start">Start</a></div>
		<div class="menu"><a href="#About" id="menu-about">About</a></div>
		<div class="menu"><a href="#Contact" id="menu-contact">Contact</a></div>
		<div class="menu"><a href="#">Projects</a></div>
		<div id="mainMenu" class="mobile-menu"></div>

		<a href="#" class="slide-menu-open">Menu</a>
		<!--Mobile meny-->
		<div class="side-menu-overlay" style="width: 0px; opacity: 0;"></div>
		<div class="side-menu-wrapper">
		<a href="#" class="menu-close">&times;</a>
			<ul>
			    <li><a href="#Start" rel="nofollow" class="start">Start</a></li>
			    <li><a href="#About"  rel="nofollow" class="About">About</a></li>
			    <li><a href="#Contact" rel="nofollow" class="Contact">Contact</a></li>
			    <li><a href="#Projects" rel="nofollow" class="Projects">Projects</a></li>
			</ul>
		</div>
	</nav>
</header>
