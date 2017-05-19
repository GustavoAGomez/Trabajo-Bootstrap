$(function(){

	var controller = new ScrollMagic.Controller();  	//Controlador de scrollmagic


	//Animacion TweenMax para formulario
	var tweenform = new TweenMax.staggerTo('.form-horizontal', 1, {right: 0, opacity: 1, ease: Expo.easeOut}); 

	//Animacion TweenMax para informacion-footer
	var tweeninfo = new TweenMax.to('.go-plus', 1, {left: 0, opacity: 1, ease: Expo.easeOut}); 

	//Animacion TweenMax para email/redes
	var tweenemail = new TweenMax.to('.email', 1, {left: 0, opacity: 1, ease: Expo.easeOut});

	//Animacion TweenMax height para info de content
	 var tweeninfowellh = new TweenMax.to('.well-info', .4, {height: "100%", ease: Power2.easeIn});

	//Animacion TweenMax height para plug de content
	var tweenplugwellh = new TweenMax.to('.well-plug', .4, {height: "30%", ease: Power2.easeIn});

	//Animacion TweenMax height para video de content
	var tweenvideowellh = new TweenMax.to('.well-video', .4, {height: "57%", ease: Power2.easeIn});


	//Incluir TweenMax y sus propiedades al scroll magic
	var SceneForm = new ScrollMagic.Scene({ 				
										triggerElement: '#trigger',
										offset: 100,
										triggerHook: 0.85
										})
										.setTween(tweenform)
										.addIndicators({name: "1 (duration: 0)"})
										.addTo(controller);

	var SceneGoPlus = new ScrollMagic.Scene({ 				
										triggerElement: '#trigger',
										offset: 100,
										triggerHook: 0.85
										})
										.setTween(tweeninfo)
										.addTo(controller);

	var SceneGoPlus = new ScrollMagic.Scene({ 				
										triggerElement: '#trigger',
										offset: 100,
										triggerHook: 0.85
										})
										.setTween(tweenemail)
										.addTo(controller);


	var SceneGoPlus = new ScrollMagic.Scene({ 				
										triggerElement: '.well-info',
										offset: 0,	
										})
										.setTween(tweeninfowellh)
										.addTo(controller);	


	var SceneGoPlus = new ScrollMagic.Scene({ 				
										triggerElement: '.well-plug',
										offset: 0,	
										})
										.setTween(tweenplugwellh)
										.addTo(controller);	

	var SceneGoPlus = new ScrollMagic.Scene({ 				
									triggerElement: '.well-plug',
									offset: 280,	
									})
									.setTween(tweenvideowellh)
									.addTo(controller);	


	// NAVBAR OPACITY
	// var SceneNav = new ScrollMagic.Scene({
	// 						offset: 10,
	// 						triggerHook: "onLeave"
	// 					})
	// 					.setTween(".navbar", 0.5, {opacity: 0.7}),
	// 					.addIndicators({name: "1 (duration: 0)"})
	// 					.addTo(controller);


});	