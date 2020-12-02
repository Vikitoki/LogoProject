$(document).ready(function() {
	const windowWidth=$(window).outerWidth();
	const windowHeight=$(window).outerHeight();
	const userAgent = window.navigator.userAgent;
	const msie = ua.indexOf("MSIE ");
	 	const isMobile = {
		Android: function() {return navigator.userAgent.match(/Android/i);},
		BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
		iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
		Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
		Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
		any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
	};
	function isIE() {
		let userAgent = navigator.userAgent;
		let is_ie = userAgent .indexOf("MSIE ") > -1 || userAgent .indexOf("Trident/") > -1;
		return is_ie; 
	}

	if(isIE()){
		$('body').addClass('ie');
	}
	
	if(isMobile.any()){
		$('body').addClass('touch');
	}
});