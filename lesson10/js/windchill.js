/*Inputs*/

let temp = parseFloat(document.getElementById('current-temp').innerText);
let speed = parseFloat(document.getElementById('windchill').innerText);
var chillfactor = (35.74 + (0.6215 * temp) - (35.75 * Math.pow(speed, 0.16)) + ((0.4275 * temp) * Math.pow(speed, 0.16)));

if (temp <= 50 && speed >= 3.0) {
    document.getElementById('windchill').innerHTML = chillfactor.toFixed(2);
} else {
    document.getElementById('windchill').innerHTML = "N/A";
}