/*Footer Date*/
try {
   const options = {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
   };
   document.getElementById('currentdate').textContent = new Date().toLocaleDateString('en', options);
} catch (e) {}

/*Slider*/

var slider = document.getElementById("severe");
var output = document.getElementById("output");
output.innerHTML = slider.value;

function adjustScale(rating) {
   document.getElementById("value").innerHTML = rating;
}

slider.oninput = function () {
   output.innerHTML = this.value;
}