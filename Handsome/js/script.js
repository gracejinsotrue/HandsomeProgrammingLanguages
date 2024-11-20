/* global monogatari */

// Define the messages used in the game.
monogatari.action('message').messages({
	'Help': {
		title: 'Help',
		subtitle: 'Some useful Links',
		body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`
	}
});

// Define the notifications used in the game
monogatari.action('notification').notifications({
	'Welcome': {
		title: 'Welcome',
		body: 'This is the Monogatari VN Engine',
		icon: ''
	}
});

// Define the Particles JS Configurations used in the game
monogatari.action('particles').particles({

});

// Define the canvas objects used in the game
monogatari.action('canvas').objects({

});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration('credits', {

});


// Define the images that will be available on your game's image gallery
monogatari.assets('gallery', {

});

// Define the music used in the game.
monogatari.assets('music', {

});

// Define the voice files used in the game.
monogatari.assets('voices', {

});

// Define the sounds used in the game.
monogatari.assets('sounds', {

});

// Define the videos used in the game.
monogatari.assets('videos', {

});

// Define the images used in the game.
monogatari.assets('images', {

});

// Define the backgrounds for each scene.
monogatari.assets('scenes', {
	'office_background': 'office_bg.png',
	'start': 'start_screen_HD.png'

});



// Define the Characters
monogatari.characters({
	'y': {
		name: '???',
		color: '#5bcaff'
	},
	'Cee': {
		name: 'Cee',
		color: '#5bcaff',
		sprites: {
			normal: 'c.png'
		}

	},
	'Peethon': {
		name: 'Peethon',
		color: '#5bcaff',
		sprites: {
			normal: 'peethon.png',
			think: 'peethon_think.png'

		}
	},
	'Windoe': {
		name: 'Windoe',
		color: '#5bcaff',
		sprites: {
			normal: 'windows.png',
			hand: 'windows_hand.png'
		}
	},
	'you': {
		name: '{{player.name}}', // Dynamic name based on player input
		color: '#ffb86c'
	}
});

monogatari.script({
	// The game starts here.
	'Start': [
		'show scene start',
		'show notification Welcome',
		{
			'Input': {
				'Text': 'What is your name?',
				'Validation': function (input) {
					return input.trim().length > 0;
				},
				'Save': function (input) {
					this.storage({
						player: {
							name: input
						}
					});
					return true;
				},
				'Revert': function () {
					this.storage({
						player: {
							name: ''
						}
					});
				},
				'Warning': 'You must enter a name!'
			} // End of 'Input' object
		},

		'y Hi {{player.name}}! Welcome to your new hell!',
		'jump NewScene' // Automatically jump to the 'NewScene' after input
	],

	'NewScene': [


		'show scene office_background with fadeIn',
		'show character Peethon normal at center with fadeIn',

		'Peethon GOOD MORNING!! My dear intern has awoken!',
		'you h-huh?',


		// Fade out Peethon before Windoe appears
		'hide character Peethon',

		// Show Windoe on the left side of the screen
		'show character Windoe normal with fadeIn',

		'Windoe and not a moment too soon.',
		// Change Windoe's sprite to the "hand" version
		'show character Windoe hand',

		'Windoe:hand how are you feeling?',

		'you ah.. WHAT IS GOING ON?',

		"Windoe:hand You look like you are about to faint. Make sure you are back on your feet before today's PR review.",

		'you uwah... what the hell. I just want a normal life...',

		'y What would you like to do next?',
		{
			'Choice': {
				'Dialog': 'y Keep Listening to this Insanity or Run Away?',
				'Continue': {
					'Text': 'Keep Listening',
					'Do': 'jump Yes'
				},
				'End': {
					'Text': 'Run Away',
					'Do': 'end'
				}
			} // End of 'Choice' object
		}
	],

	'Yes': [
		'show scene office_background',

		'you (thinking) bro...i just want to go home',
		"you hahaha... so, what's the deal with this? One moment I was at my cubicle at Am*zon, and all of a sudden I am here.",

		'show character Peethon think at center with fadeIn',
		"Peethon Am*zon huh...I think Linux's worked there in the past.",
		'you huh? Why is bro named after an operating system...',

		'Peethon think think nothing of it.',

		'hide character Peethon',
		'show character Windoe normal',

		'Windoe You ready to start your tasks?',

		'you (thinking) This is weird...',

		'show character Windoe hand',
		'Windoe Also, I think we have a better return offer rate than Am*azon.',
		"you OOH! I'm IN!",

		'end'
	],

	'No': [
		'y lmfaooo leaving already?',
		'show message Help',
		'y see you next time!!',
		'y who makes a game engine in javascript bro',
		'end'
	]
});