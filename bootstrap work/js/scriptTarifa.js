$(function(){

	var controller = new ScrollMagic.Controller();  	//Controlador de scrollmagic


	//Animacion TweenMax para formulario
	var tweenform = new TweenMax.staggerTo('.form-horizontal', 1, {right: 0, opacity: 1, ease: Expo.easeOut}); 

	//Animacion TweenMax para informacion-footer
	var tweeninfo = new TweenMax.to('.go-plus', 1, {left: 0, opacity: 1, ease: Expo.easeOut}); 

	//Animacion TweenMax para email/redes
	var tweenemail = new TweenMax.to('.email', 1, {left: 0, opacity: 1, ease: Expo.easeOut});

	//Animacion de interior mid para tarifa
	var tweentarifah = new TweenMax.to('.interior-mid', .4, {height: "100%", ease: Power2.easeIn});


	//Incluir TweenMax y sus propiedades al scroll magic
	var SceneForm = new ScrollMagic.Scene({ 				
										triggerElement: '#trigger',
										offset: 100,
										triggerHook: 0.85
										})
										.setTween(tweenform)
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
									triggerElement: '.interior-mid',
									offset: 0,	
									})
									.setTween(tweentarifah)
									.addIndicators({name: "1 (duration: 0)"})
									.addTo(controller);	



});	