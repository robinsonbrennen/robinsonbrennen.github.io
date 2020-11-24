/*Footer Date*/
try {
   const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
   document.getElementById('currentDate').textContent = new Date().toLocaleDateString('en', options);
} catch (e) {
}

/*Slider*/

var slider = document.getElementById("severe");
var output = document.getElementById("output");
output.innerHTML = slider.value;

slider.oninput = function () {
   output.innerHTML = this.value;
}