/*
get input values of temperature and wind speed 
check to make sure they are valid entries 
calculate and display windchill or display n/a if
windchill values not applicable
*/



/*Inputs*/

let temp = parseFloat(document.getElementById('temp').innerText);
let speed = parseFloat(document.getElementById('wind').innerText);
var chillfactor = (35.74 + (0.6215 * temp) - (35.75 * Math.pow(speed, 0.16)) + ((0.4275 * temp) * Math.pow(speed, 0.16)));

if (temp <= 50 && speed >= 3.0) {
    document.getElementById('chill').innerHTML = chillfactor.toFixed(2);
} else {
    document.getElementById('chill').innerHTML = "N/A";
}