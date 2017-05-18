$(function(){

	var controller = new ScrollMagic.Controller();  	//Controlador de scrollmagic


	//Animacion TweenMax para formulario
	var tweenform = new TweenMax.staggerTo('.form-horizontal', 1, {right: 0, opacity: 1, ease: Expo.easeOut}); 

	//Animacion TweenMax para informacion-footer
	var tweeninfo = new TweenMax.to('.go-plus', 1, {left: 0, opacity: 1, ease: Expo.easeOut}); 

	//Animacion TweenMax para email/redes
	var tweenemail = new TweenMax.to('.email', 1, {left: 0, opacity: 1, ease: Expo.easeOut});

	//Animacion TweenMax height para info de content
	var tweeninfowellh = new TweenMax.to('.well-info', .8, {height: "100%", ease: Power2.easeIn});

	//Animacion TweenMax opacity para info de content
	var tweeninfowello = new TweenMax.to('.well-info', .8, {opacity: 1});


	//Incluir TweenMax y sus propiedades al scroll magic
	var SceneForm = new ScrollMagic.Scene({ 				
										triggerElement: '#trigger',
										offset: 150,
										triggerHook: "onEnter"
										})
										.setTween(tweenform)
										.addTo(controller);

	var SceneGoPlus = new ScrollMagic.Scene({ 				
										triggerElement: '#trigger',
										offset: 150,
										triggerHook: "onEnter"
										})
										.setTween(tweeninfo)
										.addTo(controller);

	var SceneGoPlus = new ScrollMagic.Scene({ 				
										triggerElement: '#trigger',
										offset: 150,
										triggerHook: "onEnter"
										})
										.setTween(tweenemail)
										.addTo(controller);


	var SceneGoPlus = new ScrollMagic.Scene({ 				
										triggerElement: '#triggerI',
										offset: -450,	
										})
										.setTween(tweeninfowellh)
										.addIndicators({name: "1 (duration: 0)"})
										.addTo(controller);	


	var SceneGoPlus = new ScrollMagic.Scene({ 				
										triggerElement: '#triggerI',
										offset: -450,	
										})
										.setTween(tweeninfowello)
										.addIndicators({name: "1 (duration: 0)"})
										.addTo(controller);			


	// NAVBAR OPACITY
	// var SceneNav = new ScrollMagic.Scene({
	// 						offset: 10,
	// 						triggerHook: "onLeave"
	// 					})
	// 					.setTween(".navbar", 0.5, {opacity: 0.7})
	// 					.addTo(controller);


});	