const X_CLASS = "x"

const CIRCLE_CLASS = "circle"

const cellElements = document.querySelectorAll("[data-cell]")

const winningMessageText = document.querySelector("[data-winning-message]")

const winningMessageElement = document.getElementById("winningMessage")

const WIN_ARRAYS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8]
]

const board = document.getElementById("grid_main")

let circleTurn

cellElements.forEach(cell => {

    cell.addEventListener("click", handleClick, {once: true})

})

function start(){
   
    board.classList.add(X_CLASS)
    board.classList.remove(CIRCLE_CLASS)
    winningMessageElement.classList.remove("show")
    cell.classList.remove(X_CLASS)
    cell.classList.remove(CIRCLE_CLASS)
}   

start()

function handleClick(e) {

    const cell = e.target

    const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS

    placeMark(cell, currentClass)

    if (checkWin(currentClass)) {
        endGame(false)
       
    }

    else if (isDraw()){

        endGame(true)
        
    }
    else{
    
    swapTurns()
    setBoardHoverClass()
    }
    
}

function placeMark(cell, currentClass){

    cell.classList.add(currentClass)

}

function swapTurns(){

    circleTurn = !circleTurn

}


function setBoardHoverClass(){
 
    board.classList.remove(X_CLASS)
    board.classList.remove(CIRCLE_CLASS)    
 
    if(circleTurn) {
        board.classList.add(CIRCLE_CLASS)
    }
 
    else{
        board.classList.add(X_CLASS)
    }

}

function checkWin(currentClass){

    return WIN_ARRAYS.some(combination => {
        return combination.every(index => {
            return cellElements[index].classList.contains(currentClass)
        })
    })
}

function endGame(draw) {
    if (draw){
        winningMessageText.innerText = "Draw!"

    }
    else {
        winningMessageText.innerText = `${circleTurn ? "O" : "X" } Wins!`
    }
    winningMessageElement.classList.add("show")

}

function isDraw(){
    return [...cellElements].every(cell => {
        return cell.classList.contains(X_CLASS) || cell.classList.contains(CIRCLE_CLASS)

    })
}





// WINNER SCREEN DEBUGGED BY @adilnabi on Instagram.