$(function(){

	var controller = new ScrollMagic.Controller();  	//Controlador de scrollmagic


	//Animacion TweenMax para footer
	var tweenbox = new TweenMax.staggerTo('.form-group', 1, {bottom: 0,rotationY: 360, ease: Back.easeOut}); 


	//Incluir TweenMax y sus propiedades al scroll magic
	var scene3 = new ScrollMagic.Scene({ 				
										triggerElement: '#trigger',
										offset: 315,
										triggerHook: "onEnter"
										})
										.setTween(tweenbox)
										.addIndicators()
										.addTo(controller);


});	