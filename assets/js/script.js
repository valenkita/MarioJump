import { setupGround, updateGround } from "./ground.js"
import { updateMario, setupMario } from "./mario.js"


const GAMEBOARD_WIDTH = 200
const GAMEBOARD_HEIGHT = 100
const SPEED_SCALE_INCREASE = .00001

const gameBoardElem = document.querySelector('[data-gameBoard]')
const scoreElem = document.querySelector("[data-score]")

setPixelTogameBoardScale()
window.addEventListener("resize", setPixelTogameBoardScale)


document.addEventListener("keydown", handleStart, {once: true})

setupGround()

let lastTime
let speedScale
let score

function update(time) {
    if (lastTime == null) {
        lastTime = time
        window.requestAnimationFrame(update)
        return
    }
    const delta = time - lastTime
    
    updateGround(delta, speedScale)
    updateMario(delta,speedScale)
    updateSpeedScale(delta)
    updateScore(delta)

    lastTime = time
    window.requestAnimationFrame(update)
}

/* function to update the speed scale */
function updateSpeedScale(delta){
    speedScale += delta * SPEED_SCALE_INCREASE
}

/* function to update the score - for each 100 miliseconds that passes we get 1 point, so, for every second we get 10 points */
function updateScore(delta){
    score += delta * 0.01
    scoreElem.textContent = Math.floor(score)
}


/* starting the game with press button and the score starts in 0*/
function handleStart(){
    lastTime = null
    speedScale = 1
    score = 0
    setupGround()
    setupMario()
    window.requestAnimationFrame(update)
}

function setPixelTogameBoardScale(){
    let gameBoardToPixelScale
    if(window.innerWidth / window.innerHeight < GAMEBOARD_WIDTH / GAMEBOARD_HEIGHT){
        gameBoardToPixelScale = window.innerWidth / GAMEBOARD_WIDTH
    } else {
        gameBoardToPixelScale = window.innerHeight / GAMEBOARD_HEIGHT
    }

    gameBoardElem.style.width = `${GAMEBOARD_WIDTH * gameBoardToPixelScale}px`
    gameBoardElem.style.height = `${GAMEBOARD_HEIGHT * gameBoardToPixelScale}px`
}

