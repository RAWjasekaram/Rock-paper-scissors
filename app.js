const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e)=>{
    userChoice = e.target.id 
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random()*possibleChoices.length);
    console.log(randomNumber)

    if (randomNumber === 0) {
        computerChoice = 'rock'
    }
    if (randomNumber === 1) {
        computerChoice = 'scissors'
    }
    if (randomNumber === 2) {
        computerChoice = 'paper'
    }
    if (randomNumber === 3) {
        computerChoice = 'lizard'
    }
    if (randomNumber === 4) {
        computerChoice = 'spock'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
        result = 'it is a draw!'
    }
    if (computerChoice === 'rock' && userChoice === 'paper') {
        result = 'You win!'
    }
    if (computerChoice === 'rock' && userChoice === 'spock') {
        result = 'You win!'
    }
    if (computerChoice === 'paper' && userChoice === 'scissors') {
        result = 'You win!'
    }
    if (computerChoice === 'paper' && userChoice === 'lizard') {
        result = 'You win!'
    }
    if (computerChoice === 'scissors' && userChoice === 'rock') {
        result = 'You win!'
    }
    if (computerChoice === 'scissors' && userChoice === 'spock') {
        result = 'You win!'
    }
    if (computerChoice === 'lizard' && userChoice === 'scissors') {
        result = 'You win!'
    }
    if (computerChoice === 'lizard' && userChoice === 'rock') {
        result = 'You win!'
    }
    if (computerChoice === 'spock' && userChoice === 'paper') {
        result = 'You win!'
    }
    if (computerChoice === 'spock' && userChoice === 'lizard') {
        result = 'You win!'
    }
    if (computerChoice === 'rock' && userChoice === 'scissors') {
        result = 'You lose!'
    }
    if (computerChoice === 'rock' && userChoice === 'lizard') {
        result = 'You lose!'
    }
    if (computerChoice === 'paper' && userChoice === 'rock') {
        result = 'You lose!'
    }
    if (computerChoice === 'paper' && userChoice === 'spock') {
        result = 'You lose!'
    }
    if (computerChoice === 'scissors' && userChoice === 'paper') {
        result = 'You lose!'
    }
    if (computerChoice === 'scissors' && userChoice === 'lizard') {
        result = 'You lose!'
    }
    if (computerChoice === 'lizard' && userChoice === 'paper') {
        result = 'You lose!'
    }
    if (computerChoice === 'lizard' && userChoice === 'spock') {
        result = 'You lose!'
    }
    if (computerChoice === 'spock' && userChoice === 'rock') {
        result = 'You lose!'
    }
    if (computerChoice === 'spock' && userChoice === 'scissors') {
        result = 'You lose!'
    }
    resultDisplay.innerHTML = result
}

