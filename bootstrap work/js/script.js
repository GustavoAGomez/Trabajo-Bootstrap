$(function(){

	var controller = new ScrollMagic.Controller();  	//Controlador de scrollmagic

	var tweenbox = TweenMax.staggerFromTo('.fa', 2,  	//Animacion TweenMax para footer
											{bottom: ($('#footer').height() + 80), rotationY: 0}, 
											{bottom: 0,rotationY: 360, ease: Back.easeOut}, 0.9); 

	var scene3 = new ScrollMagic.Scene({ 				//Incluir TweenMax y sus propiedades al scroll magic
										triggerElement: '#trigger',
										duration: 900
										})
										.setTween(tweenbox)
										.addIndicators()
										.addTo(controller);


});	