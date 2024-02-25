const buttons = document.querySelectorAll(".button")
const body = document.querySelector("body")
buttons.forEach(function(button){
    console.log(button)
    const computedStyle = window.getComputedStyle(button)
    button.addEventListener("click",function(){
        // body.style.backgroundColor = e.target.id//or button.id
        body.style.backgroundColor = computedStyle.backgroundColor
       
      

    })
})

// buttons[0].addEventListener("click",function(e){
//     body.style.backgroundColor = e.target.id
// })
// buttons[1].addEventListener("click",function(e){
//     body.style.backgroundColor = e.target.id
// })
// buttons[2].addEventListener("click",function(e){
//     body.style.backgroundColor = e.target.id
// })
// buttons[3].addEventListener("click",function(e){
//     body.style.backgroundColor = e.target.id
// })