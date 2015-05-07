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
		offset: 600, /* offset the trigger 150px below #scene's top */
		duration: 400
})
.setTween(tween1)
.addTo(controller) // assign the scene to the controller

new ScrollMagic.Scene({
	triggerElement: '#when-i-was',
	offset: 200,
	duration: 1500
})
.setPin('#when-i-was') // pins the element for the the scene's duration
.addTo(controller) // assign the scene to the controller
///////// When i was a kid end /////////////


///////// I used to think that ////////////
var tween2 = TweenMax.from('#think-that', 1, {
	opacity: 0
});
// create a scene
new ScrollMagic.Scene({
		triggerElement: '#think-that',
		offset: 250, /* offset the trigger 150px below #scene's top */
		duration: 400
})
.setTween(tween2)
.addTo(controller) // assign the scene to the controller

new ScrollMagic.Scene({
	triggerElement: '#think-that',
	offset: 200,
	duration: 1500
})
.setPin('#think-that') // pins the element for the the scene's duration
.addTo(controller) // assign the scene to the controller

///////// I used to think that end ////////////


//////// porkchops and karatechops /////////
var slides = document.querySelectorAll("section.panel");
for (var i = 0; i<slides.length; i++){

	new ScrollMagic.Scene({
		triggerElement:slides[i],
		offset: 350
	})
	.setPin(slides[i])
	.addIndicators()
	.addTo(controller);

}

});

//////// porkchops and karatechops end /////////



