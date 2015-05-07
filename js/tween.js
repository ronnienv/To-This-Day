$(document).ready(function() {

	// init controller
var controller = new ScrollMagic.Controller();

///////// When I was a kid ////////////
// Create Animation for 0.5s
var tween1 = TweenMax.from('#when-i-was', 2, {
	opacity: 0
});
// create a scene
new ScrollMagic.Scene({
		triggerElement: '#when-i-was',
		offset: 200, /* offset the trigger 150px below #scene's top */
		duration: 200
	})
	.setTween(tween1)
    .setPin('#when-i-was') // pins the element for the the scene's duration
    .addTo(controller) // assign the scene to the controller
    .addIndicators();


///////// I used to think that ////////////
var tween2 = TweenMax.from('#think-that', 1, {
	opacity: 0
});
// create a scene
new ScrollMagic.Scene({
		triggerElement: '#think-that',
		offset: 250 /* offset the trigger 150px below #scene's top */
	})
	.setTween(tween2)
    .setPin('#think-that') // pins the element for the the scene's duration
    .addTo(controller) // assign the scene to the controller
    .addIndicators();

});