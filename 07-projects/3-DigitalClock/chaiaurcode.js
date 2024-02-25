const clock = document.getElementById("clock")
//my mistake
// clock.addEventListener(,function(e){
//     setInterval((e) => {
//         let date = new Date();
//         clock.textContent = date.toLocaleTimeString()
//     }, 1000);
// })

setInterval(function(){
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
},1000);