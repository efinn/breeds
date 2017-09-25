//Write a program that:

//Defines an array of dog breeds
var dogBreeds = ['dalmatian', 'german shepherd', 'beagle', 'black lab', 'corgi'];

//Make the computer choose a random breed
var randomBreed = dogBreeds[Math.floor(Math.random()*dogBreeds.length)];


//Define your favorite breed (based on input) -- Use the prompt() function to take in your fave breed
var favBreed = prompt("Please enter your favorite dog breed.");

if (favBreed != null) {
		document.write('Your favorite breed is ' + favBreed +'? Mine is ' + randomBreed +'!');
	}
else {
		document.write('Error. Please enter your favorite dog breed.');
}

//If it's the same, say 'We're besties!' and if not say 'You're wrong!'

if (randomBreed === favBreed){
	document.write('We\'re besties!')
} else {
	document.write('You\'re wrong!')
}
