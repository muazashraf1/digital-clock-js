

let time = document.querySelector("h1")
let dte = document.querySelector("h3")
 
setInterval (() =>{
   let date  = new Date();
   let hours = date.getHours();
   let minutes = date.getMinutes();
   let seconds = date.getSeconds();
   let dt = date.getDate();
   let month = date.getMonth();
   let year = date.getFullYear();

//   if(hours >= 12){
//        time.innerHTML = `${hours}:${minutes}:${seconds} <p>am</p>`
//   }else if(hours > 12){
//      time.innerHTML = `${hours % 12 ||12}:${minutes}:${seconds} <p>am</p>`
//   }else if( hours === 0){
//      time.innerHTML = `${hours === 12|| 12}:${minutes}:${seconds} <p>am</p>`
//   }else{
//     time.innerHTML = `${hours === 12 || 12}:${minutes}:${seconds} <p>pm</p>`
//   }

let  period = "AM"

if (hours >= 12){
    period = "PM"
}
if (hours > 12){
    hours = hours % 12
}
if (hours === 0){
     hours = 12
}
if (hours < 10){
    hours = "0" + hours 
}
if (minutes < 10){
    minutes = "0" + minutes
}
if(seconds < 10){
    seconds = "0" + seconds
}
// if(month < 10){
//     month = "0" + month
// }
if(dt < 10){
    dt = "0" + dt
}



time.innerHTML = `${hours}:${minutes}:${seconds} <sub>${period}</sub>`
dte.innerHTML = `${month + 1}:${dt}:${year}`
    

},1000)









