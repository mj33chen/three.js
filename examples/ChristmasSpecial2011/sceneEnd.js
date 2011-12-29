function runTheEndScene() {
	
		var theEndDirector = new THREE.Director();

		var mrT = lastTextMesh.children[0];

		var updateLights = function() {
			// Update light colors
			light.color.setHSV(light.h, light.s, light.v);
			backlight.color.setHSV(backlight.h, backlight.s, backlight.v);	
			frontlight.color.setHSV(frontlight.h, frontlight.s, frontlight.v);
			ambient.color.setHSV(ambient.h, ambient.s, ambient.v);
			// THREE.ColorUtils.adjustHSV( scene.fog.color, scene.fog.h, scene.fog.s,  scene.fog.v );
			// scene.fog.color.setHSV( scene.fog.h, scene.fog.s, scene.fog.v );
		}

		theEndDirector
		// snowman jumps
		.addTween(0, 0.25, snowman.position, {y: 250}, {y: 400}, 'Linear.EaseNone')
		// and sinks into snow 
		.addTween(0.5, 0.25, snowman.position, {y: 400}, {y: 0}, 'Linear.EaseNone')

		// snowman turns
		.addTween(1, 0.25, snowman.rotation, {y: 0}, {y: 0.5}, 'Linear.EaseNone')

		// snowman shuffles
		.addTween(2, 0.5, snowman.rotation, {y: 0}, {y: 0.75}, 'Linear.EaseNone')
		//.addTween(2, 0.5, snowman.position, {x: -1100}, {x: -1050}, 'Linear.EaseNone')
		.addTween(2, 0.5, snowman.position, null, {x: -1050}, 'Linear.EaseNone')

		.addTween(3, 0.5, snowman.rotation, null, {y: 0.5}, 'Linear.EaseNone')
		.addTween(3, 0.5, snowman.position, null, {x: -1000}, 'Linear.EaseNone')

		.addTween(4, 0.5, snowman.rotation, null, {y: 0.75}, 'Linear.EaseNone')
		.addTween(4, 0.5, snowman.position, null, {x: -950}, 'Linear.EaseNone')	

		.addTween(5, 0.5, snowman.rotation, null, {y: 0.5}, 'Linear.EaseNone')
		.addTween(5, 0.5, snowman.position, null, {x: -900}, 'Linear.EaseNone')

		.addTween(6, 0.5, snowman.rotation, null, {y: 0.75}, 'Linear.EaseNone')
		.addTween(6, 0.5, snowman.position, null, {x: -850}, 'Linear.EaseNone')

		.addTween(7, 0.5, snowman.rotation, null, {y: 0.5}, 'Linear.EaseNone')
		.addTween(7, 0.5, snowman.position, null, {x: -800}, 'Linear.EaseNone')


		.addTween(8, 0.25, snowman.position, null, {y: 400, x: -750}, 'Linear.EaseNone')
		.addTween(8.5, 0.25, snowman.position, null, {y: 250, x: -700}, 'Linear.EaseNone')

		.addTween(8, 0.25, snowman.position, null, {y: 400, x: -750}, 'Linear.EaseNone')
		.addTween(8.5, 0.25, snowman.position, null, {y: 250, x: -700}, 'Linear.EaseNone')

		.addTween(9, 0.25, snowman.position, null, {y: 400, x: -650, z:50}, 'Linear.EaseNone')
		.addTween(9.5, 0.25, snowman.position, null, {y: 250, x: -600,z:100}, 'Linear.EaseNone')

		.addTween(10, 0.25, snowman.position, null, {y: 500, x: -550, z:110}, 'Linear.EaseNone')
		.addTween(10.5, 0.25, snowman.position, null, {y: 400, x: -500,z:200}, 'Linear.EaseNone')
		.addTween(10.5, 0.25, snowman.scale, {y:1}, {y: 0.75}, 'Linear.EaseNone')
		.addTween(10.5, 0.25, mrT.scale, {y:1}, {y:0.8 }, 'Linear.EaseNone')



		.addTween(11, 0.25, snowman.position, null, {y: 600, x: -550, z:200}, 'Linear.EaseNone')
		.addTween(11, 0.25, [snowman.scale, mrT.scale], null, {y:1}, 'Linear.EaseNone')

		//.addTween(11.5, 0.25, mrT.scale, null, {y: 0.5}, 'Linear.EaseNone')
		.addTween(11.5, 0.25, mrT.position, null, {y: -100}, 'Linear.EaseNone')  // funny effect with neg scale
		//.addTween(11.5, 0.25, snowman.position, null, {y: 200}, 'Linear.EaseNone') // 
		.addTween(11.5, 0.25, snowman.position, null, {y: 340}, 'Linear.EaseNone') // stuck on the T

		.addTween(12.5, 0.25, mrT.position, null, {y: 0}, 'Linear.EaseNone') 
		//.addTween(12.5, 0.25, snowman.position, null, {y: 400}, 'Linear.EaseNone') // More sadistic
		.addTween(12.5, 0.25, snowman.position, null, {y: 600}, 'Linear.EaseNone')
		.addTween(13, 0.25, mrT.scale, null, {y: -50}, 'Linear.EaseNone') // scarry
		.addTween(13, 0.25, snowman.position, null, {y: 0}, 'Linear.EaseNone')

		.addTween(13.5, 0.25, mrT.scale, null, {y: 0}, 'Linear.EaseNone')
		.addTween(13.5, 0.25, snowman.position, null, {y: -200}, 'Linear.EaseNone')

		.addAction(14, function() {
				lastTextMesh.remove(lastTextMesh.children[0]);
		})
		.addTween(19, 2, [light.color,
			backlight.color,
			frontlight.color,
			ambient.color], null, {h:0, s:0, v:0}, 'Linear.EaseNone', updateLights)
		;

		for (var i=0,il= lastTextMesh.children.length;i<il;i++) {
			var target = lastTextMesh.children[i];

			theEndDirector
			.addTween(14.5, 3, target.position, null, 
				{x: target.position.x * 1.5, z: -2000}, 'Linear.EaseNone')
			.addTween(14.5, 3, target.rotation, null, 
				{y: Math.random()* 9 }, 'Linear.EaseNone');

		}

		
		var endTransitionDirector = new THREE.Director();
		endTransitionDirector
			.addTween(0, 2, camera.position, null, {x:0, y:172, z:2000 }, 'Linear.EaseNone')
			.addTween(0, 2, camera.rotation, null, {x:0, y:0, z:0 }, 'Linear.EaseNone')
			.addTween(0, 2, frontlight.color, null, {h:0, s:0, v:0.8}, 'Linear.EaseNone',  updateLights)
			.addAction(2.5, function() {
				snowSceneDirector = theEndDirector;
				theEndDirector.start();
			})
			
		
		snowSceneDirector = endTransitionDirector;
		endTransitionDirector.start();
		
}