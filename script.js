const monthClass = document.querySelector(".month");
const dayClass = document.querySelector(".day");
const numberClass = document.querySelector(".number");
const yearClass = document.querySelector(".year");

let date = new Date();


// const month = date.getMonth(); in number form
monthClass.innerText = date.toLocaleString("en",{month:"long"});

// let day = date.getDay();  in number form
dayClass.innerText = date.toLocaleString("en",{weekday:"long"})

numberClass.innerText = date.getDate();

yearClass.innerText = date.getFullYear();

