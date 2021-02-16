function navigation(){ //Center navigation bar
	$('.primary-nav').css('height', $('.logo').height());
	$('.primary-nav li').css('margin-top', ($('.primary-nav').height()-$('.primary-nav li').height())/2 + 'px');

	$(window).resize(function(){
		setTimeout(navigation, 500);
	});
}

$(document).ready(function(){
	$(".primary-nav a, .navable, .main .btn, .about .btn").on('click', function(e) {
		e.preventDefault();
    	var hash = this.hash;
    	$('html, body').animate({
    		scrollTop: $(hash).offset().top
     	}, 500, function(){
    		window.location.hash = hash;
      	}); 
	});
});
window.onload = function(){
	Particles.init({
		selector: '.background',
		connectParticles: true,
		color: '#5e81ac'
	  });
	  
	//Navigation
	$('.primary-nav').css('height', $('.logo').height());
	$('.primary-nav li').css('margin-top', ($('.primary-nav').height()-$('.primary-nav li').height())/2 + 'px');

	//About section
	//Determine if the image is larger than the description box - larger screen widths
	//If the description is smaller than the image, center description instead of image
	// if ($('.about-thumbnail').height() < $('.about-general-description').outerHeight()){
	// 	$('.about-thumbnail').css('margin-top', ($('.about-general-description').outerHeight()-$('.about-thumbnail').height())/2);
	// }
	// else {
	// 	$('.about-general-description').css('margin-top', ($('.about-thumbnail').outerHeight()-$('.about-general-description').height())/2);
	// }

	// if ($('.statistic-description-thumbnail').height() < $('.about-statistic-description').outerHeight()){
	// 	$('.statistic-description-thumbnail').css('margin-top', ($('.about-statistic-description').outerHeight()-$('.statistic-description-thumbnail').height())/2);
	// }
	// else {
	// 	$('.about-statistic-description').css('margin-top', ($('.statistic-description-thumbnail').outerHeight()-$('.about-statistic-description').height())/2);
	// }

	//Summary section
	if ($(window).width() > 769){
		$('.development-img').css('margin-top', ($('.problem-solving-description').outerHeight()-$('.development-img').outerHeight())/2);
		$('.responsive-img').css('margin-top', ($('.algorithm-description').outerHeight()-$('.responsive-img').outerHeight())/2);
		// $('.idea-img').css('margin-top', ($('.idea-description').outerHeight()-$('.idea-img').outerHeight())/2);
		// $('.passion-img').css('margin-top', ($('.passion-description').outerHeight()-$('.passion-img').outerHeight())/2);
	}

	//Contact section
	$('.contact-form-body').css('padding-top', ($('.contact-instructions').outerHeight()-$('.contact-form-body').height())/2);

	$(window).resize(function(){
		setTimeout(dynamicHeights, 1000);
		setTimeout(navigation, 1500);
	});
}
// END HOME PAGE JS



