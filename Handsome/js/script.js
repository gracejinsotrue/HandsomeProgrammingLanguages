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
		color: ''

	},
	'Peethon': {
		name: 'Peethon',
		color: '#5bcaff',
		sprites: {
			normal: 'peethon.png'
		}
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

		'y Hi {{player.name}} Welcome to Monogatari!',
		'jump NewScene' // Automatically jump to the 'NewScene' after input
	],

	'NewScene': [


		'show scene office_background with fadeIn',
		'show character Peethon normal at center with fadeIn',

		'Peethon This is the new scene you wanted to explore!',
		'y What would you like to do next?',
		{
			'Choice': {
				'Dialog': 'y Continue or End?',
				'Continue': {
					'Text': 'Continue',
					'Do': 'jump Yes'
				},
				'End': {
					'Text': 'End',
					'Do': 'end'
				}
			} // End of 'Choice' object
		}
	],

	'Yes': [
		'y Thats awesome!',
		'y Then you are ready to go ahead and create an amazing Game!',
		'y I can’t wait to see what story you’ll tell!',
		'end'
	],

	'No': [
		'y You can do it now.',
		'show message Help',
		'y Go ahead and create an amazing Game!',
		'y I can’t wait to see what story you’ll tell!',
		'end'
	]
});