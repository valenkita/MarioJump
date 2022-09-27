import { setCustomProperty } from "./updateCustomProperty.js"

const cloudsElems = document.querySelectorAll("[data-clouds]")

export function setupClouds(){
    setCustomProperty(cloudsElems[0], "--left",0)
}
