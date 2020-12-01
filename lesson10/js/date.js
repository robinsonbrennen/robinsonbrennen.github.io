const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

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
let dayname = daynames[d.getDay()];
let monthName = months[d.getMonth()];
let fulldate = dayname + " " + d.getDate() + " " + monthName + " " + d.getFullYear();

document.getElementById("currentdate").innerHTML = fulldate;


if (dayname == "Friday") {
    document.getElementById("pancakemessage").style.display = "block";
}
else {
    document.getElementById("pancakemessage").style.display = "none";
}

/*Footer Date*/
try {
    const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
    document.getElementById('currentdate').textContent = new Date().toLocaleDateString('en', options);
 } catch (e) {
 }