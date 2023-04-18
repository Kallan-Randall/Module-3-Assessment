console.log("hello world");


function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('The form has been updated!')
}

const duckImage = document.querySelector('#duck-image');

function ouch() {
	alert('You poked me with that pointy thing!');
}

duckImage.addEventListener('mouseover', ouch)

let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);