const form =document.querySelector("form")
//this usecase will give you emty value
// const height = parseInt(document.querySelector("#height").value)
//as submit not run 
form.addEventListener("submit",function(e){
    e.preventDefault();

  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const result = document.querySelector("#results")
  const message = document.querySelector(".message")
  if(height ==="" || height<= 0 || isNaN(height)){
   result.innerHTML = `please give a valid height ${height}`
  } else
  if(weight ==="" || weight<= 0 || isNaN(weight)){
   result.innerHTML = `please give a valid weight ${weight}`
  }
  else {
   const bmi = (weight/((height * height)/10000).toFixed(2));
   result.innerHTML = `<span>${bmi}</span>`

   if(bmi< 18.6){
    message.innerHTML = `<div>Your bmi is  ${bmi} so you are Under weight</div>`
   }
   else if(bmi>=18.6 && bmi<= 24.9){
    message.innerHTML = `<div>Your BMI is ${bmi} ,So You comes under normal range, Congratulations!!</div>`
   } else {
    message.innerHTML=  `<div>Your BMI is ${bmi} ,So You are Over Weight!</div>`
   }
  }
//   Under Weight = Less than 18.6

//   Normal Range = 18.6 and 24.9
  
//   Overweight = Greater than 24.9



})