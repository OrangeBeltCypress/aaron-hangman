const words =["steve","dimonds","dimondsword","minecraft","Noi","Kim","Zane","KC"]
let selectedword = words[Math.floor(Math.random() * words.length)]
let correctLetters = []
let wrongLetters = []

const word = document.getElementById('word')
const winner = document.querySelector('.winner')
const wrong = document.querySelector('.wrong')

let wg = 0

function displayword(){
    let display = selectedword.split('').map(letter =>{
        if(correctLetters.includes(letter)){
            return letter 
        }else{
            return' _ '
        }
    }).join('')
    word.innerHTML = display
}

displayword()

window.addEventListener('keyup', function(e){
    let guess = e.key
    if(wg == 11){
        winner.innerHTML = "time to DIE! - Referesh to try again - The word was " + selectedword
    }else{
        if(selectedword.includes(guess)){
            if(!correctLetters.includes(guess)){
                for(let i=0;i<selectedword.length; i++){
                    if(selectedword.charAt(i) === guess){
                        correctLetters.push(guess)
                    }
                }
                displayword()
             }
         }
         else{
            if(!wrongLetters.includes(guess)){
                wg++;
                wrongLetters.push(guess)
                wrong.innerHTML = wrong.innerHTML + " " + guess
            }
         }
         if(correctLetters.length === selectedword.length){
            winner.innerHTML = "I guess you win. sigh. I wanted to kill you"
         }
    } 
})