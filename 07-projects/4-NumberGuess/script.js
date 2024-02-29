let randomNUMber = (parseInt(Math.random()*100+1))

const submit = document.querySelector("#subt")
const userInput = document.querySelector(".guessField")
const guessSlot  = document.querySelector(".guesses")
const remaining  = document.querySelector(".lastResult")
const lowOrHi  = document.querySelector(".lowOrHi")
const startOver  = document.querySelector(".resultParas")

const p = document.createElement("p")

let prevGuess = []
let numGuess = 1 

let playGame = true 
if(playGame){
    submit.addEventListener("click",function(e){
        e.preventDefault()
       const guess = parseInt(userInput.value)
       validateGuess(guess)
    })
}
function validateGuess(guess){
//validate the input is it right or not 
if(isNaN(guess)){
    alert('please Enter a valid number')
}else if(guess <1){
    alert('please Enter a valid number')
}
else if(guess>100){
    alert("please enter a number less than 100")
} else {
    prevGuess.push(guess)
    if(numGuess>= 10){
        displayGuess(guess)
        displayMessage(`Game Over!, 
        Random number was :  ${randomNUMber}`)
        endGame()
    }else{
        displayGuess(guess)
        checkGuess(guess)
    }
}

}

function checkGuess(guess){
//confirm the guess is it same to number or not
if(guess === randomNUMber){
    displayMessage(`You guessed it Right`)
    endGame()
} else if(guess < randomNUMber){
    displayMessage(`Number is Too low `)
}else if(guess>randomNUMber){
    displayMessage(`Number is Too High `)
}

}


function displayGuess(guess){
// maintain the prevguess and remaining guess 
    userInput.value  = ""
    if(numGuess === 1){
        guessSlot.innerHTML += `${guess}`
    }else {
        guessSlot.innerHTML +=`,${guess}`
    }
    
 
    remaining.innerHTML = `${10 - numGuess}`;
       numGuess++;
}
function displayMessage(message){
//print the message which get as argument 
lowOrHi.innerHTML =`<h2>${message}</h2>`
}

function newGame(){
   const newGameButton =  document.querySelector("#newGame")
   newGameButton.addEventListener("click",function(e){
    randomNUMber = parseInt(Math.random()*100+1);
    prevGuess =[]
    numGuess =0
    guessSlot.innerHTML =""
    remaining.innerHTML = `${10 - numGuess}`
    userInput.removeAttribute("disabled")
    startOver.removeChild(p)
//    location.reload();
   playGame = true;
   })
}
function endGame(){
    userInput.value = "";
    userInput.setAttribute("disabled","")
    p.classList.add("button");
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p)
    playGame = false
    newGame()
} 