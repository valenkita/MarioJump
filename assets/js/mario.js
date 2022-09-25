import { getCustomProperty, incrementCustomProperty, setCustomProperty } from "./updateCustomProperty.js"

const marioElem = document.querySelector("[data-mario]")
const JUMP_SPEED = 0.45
const GRAVITY = 0.0015
const MARIO_FRAME_COUNT = 2
const FRAME_TIME = 100

let isJumping
let marioFrame
let currentFrameTime
let yVelocity

export function setupMario(){
    isJumping = false
    marioFrame = 0
    currentFrameTime = 0
    yVelocity = 0
    setCustomProperty(marioElem, "--botom", 0)
    document.removeEventListener("keydown", onJump)
    document.addEventListener("keydown", onJump)
}

export function updateMario(delta, speedScale){
    handleRun(delta, speedScale)
    handleJump(delta)
}

function handleJump(delta){
    if (!isJumping) return

    incrementCustomProperty(marioElem, "--bottom", yVelocity * delta)
    
    if(getCustomProperty(marioElem, "--bottom") <= 0){
        setCustomProperty(marioElem, "--bottom", 0)
        isJumping = false
    }
    
    yVelocity -= GRAVITY * delta
}

function onJump(e){
    if (e.code !== "Space" || isJumping) return

    yVelocity = JUMP_SPEED
    isJumping = true
}

function handleRun(delta, speedScale){
   /* if (isJumping) {
        marioElem.src = `./assets/images/mario.gif`
        return
    }

    if (currentFrameTime >= FRAME_TIME){
        marioFrame = (marioFrame + 1) % MARIO_FRAME_COUNT
        marioElem.src = `./assets/images/mario-${marioFrame}.gif`
        currentFrameTime -= FRAME_TIME
    }
    */
    currentFrameTime += delta * speedScale
}



