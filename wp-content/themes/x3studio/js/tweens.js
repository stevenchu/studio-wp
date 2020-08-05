// BOX Tween

/*
var M1 = new TimelineMax({repeat: 0, yoyo: false})
		.add(TweenMax.to('.openbox',1,{repeat:0,backgroundPosition: "-1800px",ease:SteppedEase.config(6),paused:true}));

						
						jQuery(".openbox").hover(over, out);
						 
						function over(){
						  M1.pause();M1.play();
						  }
						 
						function out(){
						  //reverse animation 4 times normal speed
						};
						*/


						// method 1 ( div background position ) :
						var M1 = TweenMax.to('.openbox',1,{repeat:0,backgroundPosition: "-1800px",ease:SteppedEase.config(6),paused:true});

						jQuery(".openbox").hover(over, out);
						 
						function over(){
						  M1.pause();M1.play();
						  }
						 
						function out(){
						  M1.reverse();
						};

// INTRO TWEENS

	// animations
	var letterStack = new TimelineMax({repeat: -1, yoyo: true})
		.add(TweenMax.to("#start .letterstack", 4, {}))
		.add(TweenMax.to("#start .letterstack", 0.5, {bottom: "+=1", left: "+=6", rotation: 3}))
		.add(TweenMax.to("#start .letterstack", 1, {bottom: "-=1", left: "+=6", rotation: 0}))
		.add(TweenMax.to("#start .letterstack", 1, {bottom: "+=1", left: "-=6", rotation: -3}))
		.add(TweenMax.to("#start .letterstack", 0.5, {bottom: "-=1", left: "+=3", rotation: 1.5}))
		.add(TweenMax.to("#start .letterstack", 0.5, {bottom: "+=1", left: "-=6", rotation: -1.5}))
		.add(TweenMax.to("#start .letterstack", 0.5, {bottom: "-=1", rotation: 1.5}));
	var handTop = new TimelineMax({repeat: -1, yoyo: true})
		.add(TweenMax.to("#start .hand", 2, {}))
		.add(TweenMax.to("#start .hand", 1, {bottom: "+=10", left: "+=40", rotation: 0}))
		.add(TweenMax.to("#start .hand", 1, {bottom: "+=1", left: "+=30", rotation: -3}))
		.add(TweenMax.to("#start .hand", 0.3, {bottom: "+=1", left: "+=10", rotation: 3}))
		.add(TweenMax.to("#start .hand", 0.3, {bottom: "-=1", left: "+=10", rotation: 1.5}))
		.add(TweenMax.to("#start .hand", 0.3, {bottom: "+=1", left: "-=6", rotation: -1.5}))
		.add(TweenMax.to("#start .hand", 0.1, {bottom: "+=1", left: "+=3", rotation: 0}))
		.add(TweenMax.to("#start .hand", 3, {bottom: "-=10", left: "-=40"}));
	var handBtm = new TimelineMax({repeat: -1, yoyo: true})
		.add(TweenMax.to("#start .hand-btm", 2, {}))
		.add(TweenMax.to("#start .hand-btm", 1, {bottom: "+=10", left: "+=40", rotation: 0}))
		.add(TweenMax.to("#start .hand-btm", 1, {bottom: "+=1", left: "+=30", rotation: -3}))
		.add(TweenMax.to("#start .hand-btm", 0.3, {bottom: "+=1", left: "+=10", rotation: 3}))
		.add(TweenMax.to("#start .hand-btm", 0.3, {bottom: "-=1", left: "+=10", rotation: 1.5}))
		.add(TweenMax.to("#start .hand-btm", 0.3, {bottom: "+=1", left: "-=6", rotation: -1.5}))
		.add(TweenMax.to("#start .hand-btm", 0.1, {bottom: "+=1", left: "+=3", rotation: 0}))
		.add(TweenMax.to("#start .hand-btm", 3, {bottom: "-=10", left: "-=40"}));					
	var swayBlocks = new TimelineMax({repeat: -1, yoyo: true})
		.add(TweenMax.to("#start .chu", 4, {}))
		.add(TweenMax.to("#start .chu", 1.5, {bottom: "+=0", left: "+=5", rotation: 0}))
		.add(TweenMax.to("#start .chu", 0.5, {bottom: "-=0", left: "+=1", rotation: -1}))
		.add(TweenMax.to("#start .chu", 0.5, {bottom: "+=0", left: "+=5", rotation: 0}))
		.add(TweenMax.to("#start .chu", 0.5, {bottom: "-=0", left: "+=5", rotation: 3}))
		.add(TweenMax.to("#start .chu", 0.5, {bottom: "+=0", left: "-=6", rotation: 0}))
		.add(TweenMax.to("#start .chu", 0.5, {bottom: "+=0", left: "-=3", rotation: -1}));
	var swayBase = new TimelineMax({repeat: -1, yoyo: true})
		.add(TweenMax.to("#start .studio", 4, {}))
		.add(TweenMax.to("#start .studio", 2, {rotation: 1}))
		.add(TweenMax.to("#start .studio", 1, {bottom: "+=0", left: "-=1", rotation: 0}))
		.add(TweenMax.to("#start .studio", 0.5, {bottom: "-=0", left: "+=1", rotation: 0}))
		.add(TweenMax.to("#start .studio", 0.5, {bottom: "-=0", left: "-=1"}));


	



		/*/ get started animations
		var div1 = "#get-started .cog",
		    tl1 = new TimelineMax(),
		    transformOriginObj = {'left':0, 'top':0};

		TweenLite.set(div1, {transformOrign:'0% 0%'});

		tl1
		.to(div1, 10, {rotation:360, transformOrigin:"left top"})
		.to(transformOriginObj, 1, {left:100, top:100, roundProps:'top, left', onUpdate:updateOrigin})
		.to(div1, 1, {rotation:-45}, '-=1');

		function updateOrigin()
		{
		  TweenLite.set(div1, {transformOrigin:transformOriginObj.left + '% ' + transformOriginObj.top +  '%'});
		}
		*/
		
		/*var cogRotate = new TimelineMax({repeat: -1, yoyo: true})
			//spins around the element's top left corner
			.add(TweenLite.to("#get-started .cog", 2, {rotation:360, transformOrigin:"left top"}));*/

		// sway movement
		/*new ScrollScene({
				duration: 4000,
				offset: -100
			})
			.setTween(cogRotate)
			.addTo(controller);*/



/*
	// container pin
	var startpin = new ScrollScene({
			duration: 700
		})
		.setPin("section#start")
		.addTo(controller);

	// msg scroll ani
	new ScrollScene({
			duration: 140,
			offset: -100
		})
		.setTween(TweenMax.to("#msg div.scroll", 1, {backgroundPosition: "0 13px", repeat: -1, delay: 1, repeatDelay: 2, ease: Linear.easeNone}))
		.addTo(controller);
	// msg hide
	new ScrollScene({
			offset: 40
		})
		.setTween(TweenMax.to("#msg", 0.5, {bottom: -40}))
		.addTo(controller);

	// hat movement
	new ScrollScene({
			duration: 300,
			offset: -100
		})
		.setTween(letterStack)
		.addTo(controller);

	// sway movement
	new ScrollScene({
			duration: 600,
			offset: -100
		})
		.setTween(swayBlocks)
		.addTo(controller);

	// swayBase movement
	new ScrollScene({
			duration: 900,
			offset: -100
		})
		.setTween(swayBase)
		.addTo(controller);


	// big reveal
	new ScrollScene({
			duration: 300,
			offset: 260
		})
		.setTween(reveal)
		.addTo(controller);

	// jumping text
	new ScrollScene({
			duration: 200,
			offset: 450
		})
		.setTween(laola)
		.addTo(controller);

*/


 