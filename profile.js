const favColor = document.querySelector('#color');
const favPlace = document.querySelector('#place');
const favRitual = document.querySelector('#ritual');

favColor.addEventListener('click', () => {
    alert('My favorite color is blue');
});

favPlace.addEventListener('click', () => {
    alert('My favorite place is the family cabin')
})

favRitual.addEventListener('click', () => {
    alert('My favorite ritual is sunday night dinner with family')
})