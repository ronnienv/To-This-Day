$(document).ready(function() {

    var offset = 850;
    var duration = 300;
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('#to-top').fadeIn(duration);
        } else {
            jQuery('#to-top').fadeOut(duration);
        }
    });

	jQuery('#to-top').click(function(event){
		event.preventDefault();
		jQuery('html, body').animate({scrollTop: 0}, duration);
		return false;
	})
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
		duration: 2000
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
		duration: 2000
	})
	.setPin('#think-that') // pins the element for the the scene's duration
	.addTo(controller) // assign the scene to the controller

	///////// I used to think that end ////////////


	//////// porkchops and karatechops /////////
	var slides = document.querySelectorAll("section.panel");
	for (var i = 0; i<slides.length; i++){

		new ScrollMagic.Scene({
			triggerElement:slides[i],
			offset: 450
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
		offset: 100,
		duration: 1000
	})
	.setTween(tween3)
	.addTo(controller)

	//////// grandma thought it was cute ends /////////

	/////// no big deal ///////////

	new ScrollMagic.Scene({
		triggerElement: '#no-big-deal',
		offset: 100,
		duration: 2000
	})
	.setPin('#no-big-deal')
	.addTo(controller)
	/////// no big deal end ///////////

	new ScrollMagic.Scene({
		triggerElement: '#one-day',
		offset:100,
		duration: 2000
	})
	.setPin('#one-day')
	.addTo(controller)

	//////// climbing tree //////////////

	var wipeAnimation = new TimelineMax()
		.fromTo("section.dir-panel.before-realized", 1, {x:"-100%"}, {x:"0%", ease: Linear.easeNone})
		.fromTo("section.dir-panel.filler", 1, {x:"-100%"}, {x:"0%", ease: Linear.easeNone})
		.fromTo("section.dir-panel.fell-out", 1, {y:"-100%"}, {y:"0%", ease: Linear.easeNone})
		.fromTo("section.dir-panel.filler", 1, {x:"-100%"}, {x:"0%", ease: Linear.easeNone})
		.fromTo("section.dir-panel.bruised", 1, {x:"100%"}, {x:"0%", ease: Linear.easeNone})
		.fromTo("section.dir-panel.filler", 1, {x:"-100%"}, {x:"0%", ease: Linear.easeNone});

	new ScrollMagic.Scene ({
		triggerElement: "#climbing-tree",
		triggerHook: "onLeave",
		duration: 24000
	})
	.setPin("#climbing-tree")
	.setTween(wipeAnimation)
	.addTo(controller);

	/////////// climbing tree end ////////////////

	////////// not tell grandma ////////////////

	var tweenNotTell = TweenMax.from('#not-tell-grandma', 1, {
		opacity: 0
	});

	new ScrollMagic.Scene({
			triggerElement: '#not-tell-grandma',
			offset: 400, 
			duration: 400
	})
	.setTween(tweenNotTell)
	.addTo(controller)

	new ScrollMagic.Scene({
		triggerElement: '#not-tell-grandma',
		offset: 420,
		duration: 3000
	})
	.setPin('#not-tell-grandma') 
	.addTo(controller) 

	new ScrollMagic.Scene({
		triggerElement: "#scared-shed-yell",
		duration: 3000,
		offset: 420
	})
	.setPin('#scared-shed-yell')
	.addTo(controller)

	new ScrollMagic.Scene({
		triggerElement: "#playing-where-shouldnt",
		offset: 200,
		duration:3000
	})
	.setPin('#playing-where-shouldnt')
	.addTo(controller)

	//////// not tell grandma end ///////////

	/////// gym teacher /////////////////////

	var wipeAnimation = new TimelineMax()
		.fromTo("section.dir-panel.teacher-noticed", 1, {x:"-100%"}, {x:"0%", ease: Linear.easeNone})
		.fromTo("section.dir-panel.filler", 1, {x:"-100%"}, {x:"0%", ease: Linear.easeNone})
		.fromTo("section.dir-panel.got-sent", 1, {x:"-100%"}, {x:"0%", ease: Linear.easeNone})
		.fromTo("section.dir-panel.filler", 1, {x:"-100%"}, {x:"0%", ease: Linear.easeNone})
		.fromTo("section.dir-panel.another-room", 1, {x:"-100%"}, {x:"0%", ease: Linear.easeNone})
		.fromTo("section.dir-panel.filler", 1, {x:"-100%"}, {x:"0%", ease: Linear.easeNone})
		.fromTo("section.dir-panel.nice-lady", 1, {x:"-100%"}, {x:"0%", ease: Linear.easeNone})
		.fromTo("section.dir-panel.filler", 1, {x:"-100%"}, {x:"0%", ease: Linear.easeNone})
		.fromTo("section.dir-panel.asked-questions", 1, {x:"-100%"}, {x:"0%", ease: Linear.easeNone})
		.fromTo("section.dir-panel.filler", 1, {x:"-100%"}, {x:"0%", ease: Linear.easeNone})
		.fromTo("section.dir-panel.life-at-home", 1, {x:"-100%"}, {x:"0%", ease: Linear.easeNone})
		.fromTo("section.dir-panel.filler", 1, {x:"-100%"}, {x:"0%", ease: Linear.easeNone});

	new ScrollMagic.Scene ({
		triggerElement: "#teacher-part",
		triggerHook: "onLeave",
		duration: 24000
	})
	.setPin("#teacher-part")
	.setTween(wipeAnimation)
	.addTo(controller);

	new ScrollMagic.Scene({
		triggerElement: "#lie",
		duration: 3000,
		offset: 420
	})
	.setPin('#lie')
	.addTo(controller)

	var tweenAsFarAs = TweenMax.from('#as-far-as', 1, {
		opacity: 0
	});

	new ScrollMagic.Scene({
			triggerElement: '#as-far-as',
			offset: 250, /* offset the trigger 150px below #scene's top */
			duration: 400
	})
	.setTween(tweenAsFarAs)
	.addTo(controller) // assign the scene to the controller

	new ScrollMagic.Scene({
		triggerElement: '#as-far-as',
		offset: 200,
		duration: 2000
	})
	.setPin('#as-far-as') // pins the element for the the scene's duration
	.addTo(controller) // assign the scene to the controller

	new ScrollMagic.Scene({
		triggerElement: "#life-was-good",
		duration: 3000,
		offset: 420
	})
	.setPin('#life-was-good')
	.addTo(controller)

	new ScrollMagic.Scene({
		triggerElement: "#whenever-im-sad",
		duration: 3000,
		offset: 420
	})
	.setPin('#whenever-im-sad')
	.addTo(controller)

	new ScrollMagic.Scene({
		triggerElement: "#gives-chops",
		duration: 3000,
		offset: 420
	})
	.setPin('#gives-chops')
	.addTo(controller)

	////// gym teacher end //////////////////

	///// investigation /////////////////////

	var wipeAnimation2 = new TimelineMax()
		.fromTo("section.dir-panel.led-to", 1, {y:"-100%"}, {y:"0%", ease: Linear.easeNone})
		.fromTo("section.dir-panel.filler", 1, {y:"-100%"}, {y:"0%", ease: Linear.easeNone})
		.fromTo("section.dir-panel.removed", 1, {y:"100%"}, {y:"0%", ease: Linear.easeNone})
		.fromTo("section.dir-panel.filler", 1, {y:"100%"}, {y:"0%", ease: Linear.easeNone})
		.fromTo("section.dir-panel.how", 1, {y:"-100%"}, {y:"0%", ease: Linear.easeNone})
		.fromTo("section.dir-panel.filler", 1, {y:"-100%"}, {y:"0%", ease: Linear.easeNone})
		.fromTo("section.dir-panel.rumors", 1, {y:"100%"}, {y:"0%", ease: Linear.easeNone})
		.fromTo("section.dir-panel.filler", 1, {y:"100%"}, {y:"0%", ease: Linear.easeNone})
		.fromTo("section.dir-panel.earned-nickname", 1, {y:"-100%"}, {y:"0%", ease: Linear.easeNone})
		.fromTo("section.dir-panel.filler", 1, {y:"-100%"}, {y:"0%", ease: Linear.easeNone})
		.fromTo("section.dir-panel.nickname", 1, {y:"100%"}, {y:"0%", ease: Linear.easeNone})
		.fromTo("section.dir-panel.filler", 1, {y:"100%"}, {y:"0%", ease: Linear.easeNone});

	new ScrollMagic.Scene ({
		triggerElement: "#investigation",
		triggerHook: "onLeave",
		duration: 20000
	})
	.setPin("#investigation")
	.setTween(wipeAnimation2)
	.addTo(controller);

	///// investigation end /////////////////

	var tweenToThisDay = TweenMax.from('#to-this-day', 2, {
		opacity: 0
	});
	// create a scene
	new ScrollMagic.Scene({
			triggerElement: '#to-this-day',
			offset: 600, /* offset the trigger 150px below #scene's top */
			duration: 400
	})
	.setTween(tweenToThisDay)
	.addTo(controller) // assign the scene to the controller

	new ScrollMagic.Scene({
		triggerElement: '#to-this-day',
		offset: 200,
		duration: 2000
	})
	.setPin('#to-this-day') // pins the element for the the scene's duration
	.addTo(controller) // assign the scene to the controller

	new ScrollMagic.Scene({
		triggerElement: '#hate',
		offset: 200,
		duration: 2500
	})
	.setPin('#hate') // pins the element for the the scene's duration
	.addTo(controller) // assign the scene to the controller

	/////// monologue ////////

	var wipeMonologue = new TimelineMax()
		.fromTo("section.dir-panel.hallway", 1, {y:"100%"}, {y:"0%", ease: Linear.easeNone})
		.fromTo("section.dir-panel.filler", 1, {y:"100%"}, {y:"0%", ease: Linear.easeNone})
		.fromTo("section.dir-panel.surrounded", 1, {y:"100%"}, {y:"0%", ease: Linear.easeNone})
		.fromTo("section.dir-panel.filler", 1, {y:"100%"}, {y:"0%", ease: Linear.easeNone})
		.fromTo("section.dir-panel.rhyme", 1, {y:"100%"}, {y:"0%", ease: Linear.easeNone})
		.fromTo("section.dir-panel.filler", 1, {y:"100%"}, {y:"0%", ease: Linear.easeNone})
		.fromTo("section.dir-panel.as-if", 1, {y:"100%"}, {y:"0%", ease: Linear.easeNone})
		.fromTo("section.dir-panel.filler", 1, {y:"100%"}, {y:"0%", ease: Linear.easeNone})
		.fromTo("section.dir-panel.hurt-more", 1, {y:"100%"}, {y:"0%", ease: Linear.easeNone})
		.fromTo("section.dir-panel.filler", 1, {y:"100%"}, {y:"0%", ease: Linear.easeNone})
		.fromTo("section.dir-panel.them-all", 1, {y:"100%"}, {y:"0%", ease: Linear.easeNone})
		.fromTo("section.dir-panel.filler", 1, {y:"100%"}, {y:"0%", ease: Linear.easeNone});

	new ScrollMagic.Scene ({
		triggerElement: "#monologue",
		triggerHook: "onLeave",
		duration: 20000
	})
	.setPin("#monologue")
	.setTween(wipeMonologue)
	.addTo(controller);

	new ScrollMagic.Scene({
		triggerElement: '#grew-up',
		offset: 200,
		duration: 2500
	})
	.setPin('#grew-up') // pins the element for the the scene's duration
	.addTo(controller) // assign the scene to the controller

	////// monologue end /////

});




