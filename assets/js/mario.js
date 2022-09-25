/*const marioElem = document.querySelector("[data-mario]")
const JUMP_SPEED = .45
const GRAVITY = .011
const MARIO_FRAM_COUNT = 2
const FRAME_TIME = 100

let isJumping
let marioFrame
let currentFrameTime

export function setupMario(){
    isJumping = false
    marioFrame = 0
    currentFrameTime = 0
}

export function updateMario(delta, speedScale){
    handleRun(delta, speedScale)
    handleJump()
}

function handleRun(delta, speedScale){
    if (isJumping) {
        marioElem.src = './assets/images/mario.gif'
        return
    }

    if (currentFrameTime >= FRAME_TIME){
        marioFrame = (marioFrame + 1) % MARIO_FRAME_COUNT
        marioElem.src = `./assets/images/mario-${marioFrame}.gif`
        currentFrameTime -= FRAME_TIME
    }
    currentFrameTime += delta * speedScale
}

function handleJump(){

}*/