const date = document.getElementById("date");
const month = document.getElementById("month");
const year= document.getElementById("year");
const btn = document.getElementById("btn");
const card = document.getElementById("card");
const data = document.createElement("h2");
btn.addEventListener("click",()=>{
   data.innerHTML="" 
let d1 =date.value;
debugger
let m1 =month.value;
let y1 =year.value;
// if(dateval == ""||monthvavl==""||yearval==""){

// }

let d2 = new Date().getDate();
let m2 = new Date().getMonth()+1;
let y2 = new Date().getFullYear();
let months=[31,28,31,30,31,30,31,31,30,31,30,31]
if(d1>d2){
   d2 = d2 +months[m2-1];
   m2 =m2-1;
}
if(m1>m2){
   m2 =m2+12;
   y2=y2-1;
}
let d =d2-d1;
let m =m2-m1; 
let y = y2-y1


data.innerText =`Your Age is ${y} years ${m} months ${d} days`
card.appendChild(data);
})