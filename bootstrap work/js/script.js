$(function(){

	var controller = new ScrollMagic.Controller();  	//Controlador de scrollmagic


	//Animacion TweenMax para formulario
	var tweenform = new TweenMax.staggerTo('.form-horizontal', 1, {bottom: 0, ease: Bounce.easeOut}); 

	//Animacion TweenMax para informacion-footer
	var tweeninfo = new TweenMax.staggerTo('.go-plus', 1, {left: 0, ease: Bounce.easeOut}); 


	//Incluir TweenMax y sus propiedades al scroll magic
	var SceneForm = new ScrollMagic.Scene({ 				
										triggerElement: '#trigger',
										offset: 290,
										triggerHook: "onEnter"
										})
										.setTween(tweenform)
										.addIndicators()
										.addTo(controller);

	var SceneGoPlus = new ScrollMagic.Scene({ 				
										triggerElement: '#trigger',
										offset: 290,
										triggerHook: "onEnter"
										})
										.setTween(tweeninfo)
										.addIndicators()
										.addTo(controller);


});	