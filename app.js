const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
   userChoice = e.target.id
   userChoiceDisplay.innerHTML = userChoice
   generateComputerChoice()
   resultAnnounce()
}))

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) +1
    console.log(randomNumber)

    if (randomNumber === 1){
        computerChoice = 'rock'
    }
    if (randomNumber === 2){
        computerChoice = 'scissors'
    }
    if (randomNumber === 3){
        computerChoice = 'paper'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function resultAnnounce(){
    if (computerChoice === 'rock' & userChoice === 'paper') {
        result = "You Win!"
    }
    else if (computerChoice === 'paper' & userChoice === 'scissors'){
        result = "You Win!"
    }
    else if (computerChoice === 'scissors' & userChoice === 'rock'){
        result = "You Win!"
    }
    else if (computerChoice === userChoice){
        result = "It's a tie"
    }
    else {
        result = "You Loose!"
    }

    resultDisplay.innerHTML = result
}