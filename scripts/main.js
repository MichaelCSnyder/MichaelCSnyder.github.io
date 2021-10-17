let myImage = document.querySelector('img');

//Main Image Cycler
myImage.onclick = function() {
	let mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/hubble-deep-field.png') {
		myImage.setAttribute('src','images/nebula.jpg');
	} else {
		myImage.setAttribute('src','images/hubble-deep-field.png');
	}
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

//Setting Username
function setUserName() {
	let myName = prompt('Please enter your name.');
	if (!myName) {
		setUserName();
	} else {
		localStorage.setItem('name',myName);
		myHeading.textContent = 'I, The Universe, am cool, ' + myName+ '!';
	}
}

//Change Page Heading
if(!localStorage.getItem('name') || localStorage.getItem('name') === null) {
	setUserName();
} else {
	let storedName = localStorage.getItem('name');
	myHeading.textContent = 'I, The Universe, am cool, ' + storedName + '!';
}

//Change User
myButton.onclick = function() {
	setUserName();
}