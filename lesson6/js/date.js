/* Hamburger Menu*/
const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};



//current date 1

let daynames = [
   "Sunday",
   "Monday",
   "Tuesday",
   "Wednesday",
   "Thursday",
   "Friday",
   "Saturday"
];
let months = [
   "January",
   "February",
   "March",
   "April",
   "May",
   "June",
   "July",
   "August",
   "September",
   "October",
   "November",
   "December"
];

let d = new Date();
let dayName = daynames[d.getDay()];
let monthName = months[d.getMonth()];
let fulldate = dayName + " " + d.getDate() + " " + monthName + " " + d.getFullYear();

document.getElementById("currentDate").innerHTML = fulldate;

// if date == friday
//    return pancake banner;
console.log(dayName);
if (dayName == "Friday") {
    document.getElementById("pancakemessage").style.display = "block";
}
else {
    document.getElementById("pancakemessage").style.display = "none";
}


//current date 2
/*
try {
   let options = {
       weekday: "long",
       month: "long",
       day: "numeric",
       year: "numeric"
   };
   document.getElementById(
       "currentDate"
   ).textContent = new Date(document.lastModified).toLocaleDateString("en-US", options);
   } catch (e) {
       alert("Error with code or your browser does not support Locale");
   }*/