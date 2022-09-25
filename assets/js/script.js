import { setupGround, updateGround } from "./ground.js"
import { updateMario, setupMario, getMarioRect, setMarioLose } from "./mario.js"
import { updatePipe, setupPipe, getPipeRects } from "./pipe.js"


const GAMEBOARD_WIDTH = 200
const GAMEBOARD_HEIGHT = 100
const SPEED_SCALE_INCREASE = .00001

const gameBoardElem = document.querySelector('[data-gameBoard]')
const scoreElem = document.querySelector("[data-score]")

const open = document.querySelector('.info-button');
const modal = document.querySelector('.modal');
const close = document.querySelector('.modal_close');

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
    updatePipe(delta,speedScale)
    updateSpeedScale(delta)
    updateScore(delta)
    if (checkLose()) return handleLose()

    lastTime = time
    window.requestAnimationFrame(update)
}

function checkLose() {
    const marioRect = getMarioRect()
    return  getPipeRects().some(rect => isCollision(rect, marioRect))
}

function isCollision(rect1, rect2){
    return (
        rect1.left < rect2.right &&
        rect1.top < rect2.bottom &&
        rect1.right < rect2.left &&
        rect1.bottom > rect2.top
    )

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
    setupPipe()
    window.requestAnimationFrame(update)
}

function handleLose(){
    setMarioLose()
    setTimeout(() => {
        document.addEventListener("keydown", handleStart, {once: true})
    }, 100)
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

/* modal */
open.addEventListener('click', ()=>{
    modal.classList.add('show');
  });
  
  close.addEventListener('click', ()=>{
    modal.classList.remove('show');
  });