console.log("script.js initializing")
let boxes = document.querySelector(".container").children
console.log(boxes)

function getRandomColor(){
    let val1 = Math.floor(Math.random()*255)
    let val2 = Math.floor(Math.random()*255)
    let val3 = Math.floor(Math.random()*255)
    return `rgb(${val1},${val2},${val3})`
}
Array.from(boxes).forEach((element)=>{
    element.style.backgroundColor = getRandomColor()
    element.style.color = getRandomColor()
})