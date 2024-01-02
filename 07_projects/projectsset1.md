# Projects related to DOM

## Project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code

## Project 1

```javascript
// Here we will keep the solution code and you can take it from preview Screen of .md file.
console.log("Aayush")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = 'grey';
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'purple') {
      body.style.backgroundColor = e.target.id;
    }
  });
});


```
## project 2 solution

```javascript
const form = document.querySelector('form');

// this usecase will give you empty value
// const height=  parseInt(document.querySelector('#height').value)
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = 'please give a valid height';
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = 'please give a valid weight';
  } else {
    const bmi = weight / ((height * height) / 10000).toFixed(2);
    //show results
    results.innerHTML = `<span>${bmi}</span>`;
  }
});


```
## Project 3 solution

```javascript
const clock = document.getElementById('clock')
// const clock = document.querySelector('#clock')


setInterval(function(){

  let date = new Date()
  // console.log(date.toLocaleTimeString());
  clock.innerHTML= date.toLocaleTimeString();
},1000)
```
## Project 4 solution

```Javascript
//1st challenge to generate a random no from 1 to 100
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let madeAttemps = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    //console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  // simply validate if value is there and it is between 1 to 100
  if (isNaN(guess)) {
    alert('Please enter a valid no');
  } else if (guess < 1) {
    alert('Please enter a valid no');
  } else if (guess > 100) {
    alert('Please enter a valid no less than 100');
  } else {
    prevGuess.push(guess);
    if (madeAttemps === 11) {
      displayGuess(guess);
      displayMessage(`Game over.Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  //check the guess with actual random no
  if (guess === randomNumber) {
    displayMessage(`you guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`no is too low`);
  } else if (guess > randomNumber) {
    displayMessage(`no is too high`);
  }
}

function displayGuess(guess) {
  // value cleaning / guess update/remaing guess update
  userInput.value = '';
  guessSlot.innerHTML += `${guess} `;
  madeAttemps++;
  remaining.innerHTML = `${11 - madeAttemps}`;
}

function displayMessage(message) {
  // message display
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id = "newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    madeAttemps = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - madeAttemps}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}

```