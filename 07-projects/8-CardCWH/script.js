function createCard(title,cName,views,montsOld,duration,thumbnail){
    let viewStr;
   if(views<1000000){
     viewStr = views/1000 +"k";

   }   
   else if(views>=1000000){
     viewStr = views/1000000 + "M";
   } else {
    viewStr = views;
   }
    let cardTemp = `<div class="card">
    <div class="image">
        <img src="${thumbnail}">
        <div class="capsule">${duration}</div>
    </div>
    <div class="text">
        <h1 class="title">${title}</h1>
        <p>${cName} . ${viewStr} views . ${montsOld} months ago</p>

    </div>
</div>`
let container = document.querySelector(".container")
console.log(container)
document.querySelector(".container").innerHTML =
document.querySelector(".container").innerHTML + cardTemp;
console.log("cardadded");

}

createCard("Intro to Web Development ","CodeWithHarry",56000000,3,"23:22","https://i.ytimg.com/vi/UzYRQURh_pY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCqIwQwDx1EIDwleUS2D1CGiar3LQbw")