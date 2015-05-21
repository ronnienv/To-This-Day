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
		.addTo(controller);

	}

	//////// porkchops and karatechops end /////////

	//////// grandma thought it was cute /////////

	var grannyTween = TweenMax.from('.grandma', 1, {
		opacity: 0
	});

	new ScrollMagic.Scene({
		triggerElement: '.grandma',
		offset: 200,
		duration: 100
	})
	.setTween(grannyTween)
	.addTo(controller);

	var tween3 = TweenMax.from('#because-grandma', 1, {
		opacity: 1
	})

	new ScrollMagic.Scene({
		triggerElement: '.grandma',
		offset: 100
	})
	.setTween(tween3)
	.addTo(controller)

	//////// grandma thought it was cute ends /////////

	/////// no big deal ///////////

	new ScrollMagic.Scene({
		triggerElement: '#no-big-deal',
		offset: 100,
		duration: 1200
	})
	.setPin('#no-big-deal')
	.addTo(controller)
	/////// no big deal end ///////////

	new ScrollMagic.Scene({
		triggerElement: '#one-day',
		offset:100,
		duration: 1200
	})
	.setPin('#one-day')
	.addTo(controller)

	//////// climbing tree //////////////

	var wipeAnimation = new TimelineMax()
		.fromTo("section.dir-panel.before-realized", 1, {x:"-100%"}, {x:"0%", ease: Linear.easeNone})
		.fromTo("section.dir-panel.fell-out", 1, {x:"-100%"}, {x:"0%", ease: Linear.easeNone})
		.fromTo("section.dir-panel.bruised", 1, {x:"-100%"}, {x:"0%", ease: Linear.easeNone})

	new ScrollMagic.Scene ({
		triggerElement: "#climbing-tree",
		triggerHook: "onLeave",
		duration: "100%"
	})
	.setPin("#climbing-tree")
	.setTween(wipeAnimation)
	.addIndicators()
	.addTo(controller)

	/////////// climbing tree end ////////////////

});




