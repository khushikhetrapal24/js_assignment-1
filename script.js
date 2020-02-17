var textToSpeak = '';
// The array items
const arrayOne = ['The Turkey',  'Mom','Dad', 'My Teacher',  'The Elephant','The Cat'];
const listOne = document.querySelector('.list-one ul');

const arrayTwo = ['Sat On', 'Ate', 'Danced with', 'Saw', 'Does Not Like', 'Kissed'];
const listTwo = document.querySelector('.list-two ul');

const arrayThree = ['A Funny', 'A Scary', 'A Goody', 'A Slimy', 'A Barking', 'A Fat'];
const listThree = document.querySelector('.list-three ul');

const arrayFour = ['Goat', 'Monkey', 'Fish', 'Cow', 'Frog','Bug', 'Worm'];
const listFour = document.querySelector('.list-four ul');

const arrayFive = ['On the Moon', 'On the Chair', 'In My Spaghetti','In my Soup','On the Grass', 'In My Shoes'];
const listFive = document.querySelector('.list-five ul');

const playBtn = document.querySelector('#play-btn');
const resetBtn = document.querySelector('#reset-btn');

// function to display the items
function bindArray(arr, elem) {
    for(let item of arr) {
        let listItem = document.createElement('li');
        let currentItem = item;
        listItem.textContent = item;
        elem.appendChild(listItem);
        listItem.addEventListener('click', function(){
            speakNow(currentItem);
            textToSpeak = textToSpeak + currentItem;
        });
    }
}

// Create a new speechSynthesis object
var synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak

/* Functions
-------------------------------------------------- */
function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	var utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
}
bindArray(arrayOne, listOne);
bindArray(arrayTwo, listTwo);
bindArray(arrayThree, listThree);
bindArray(arrayFour, listFour);
bindArray(arrayFive, listFive);

playBtn.addEventListener('click', function(){
    speakNow(textToSpeak);
    textToSpeak = '';
});

resetBtn.addEventListener('click', function(){
    speakNow('Reset done.');
    textToSpeak = '';
});