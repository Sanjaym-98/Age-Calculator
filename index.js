const date = document.getElementById("date");
const month = document.getElementById("month");
const year= document.getElementById("year");
const btn = document.getElementById("btn");
const card = document.getElementById("card");
const data = document.createElement("h2");
btn.addEventListener("click",()=>{
   data.innerHTML="" 
let dateval =date.value;
debugger
let monthvavl =month.value;
let yearval =year.value;
// if(dateval == ""||monthvavl==""||yearval==""){

// }
console.log(new Date().getFullYear())
let years =new Date().getFullYear() - parseInt(yearval);
let months =  new Date().getMonth()- parseInt(monthvavl);
let dates =new Date().getDate() -parseInt(dateval);
if(months<0 ||( months ===0 && dates<0)){
   years--;
   months= 12-parseInt(monthvavl)+new Date().getMonth();
   dates =new Date().getDate()-dateval;
}
if(dates<0){
   months--;
   const monthdays = new Date(new Date().getFullYear(),new Date().getMonth(),0).getDate();
   dates =monthdays-new Date().getDate()+new Date().getDate();
}
data.innerText =`Your Age is ${years} years ${months} months ${dates} days`
card.appendChild(data);
})