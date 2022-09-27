import { getCustomProperty, incrementCustomProperty, setCustomProperty } from "./updateCustomProperty.js"

const SPEED = 0.05
const cloudElems = document.querySelectorAll("[data-cloud]")

export function setupCloud(){
    setCustomProperty(cloudElems[0], "--right",0)
    setCustomProperty(cloudElems[1], "--right",100)
}


/*Configuring the speedScale to make the game harder*/
export function updateCloud(delta, speedScale){
    cloudElems.forEach(cloud=> {
        incrementCustomProperty(cloud, "--left", delta * speedScale * SPEED * -1 )

        if (getCustomProperty(cloud, "--left")<= -100) {
            incrementCustomProperty(cloud, "--left", 200)
        }
    })

}
