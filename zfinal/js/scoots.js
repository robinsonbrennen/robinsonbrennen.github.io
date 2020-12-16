/***********************#***************************/
function myFunction() {
   var x = document.getElementById("mylinks");
   if (x.style.display === "block") {
     x.style.display = "none";
   } else {
     x.style.display = "block";
   }
 } 

/*************************Footer Date**************************/
try {
   const options = {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
   };
   document.getElementById('currentdate').textContent = new Date().toLocaleDateString('en', options);
} catch (e) {}

/*************************Weather Api***************************/
const apiURL = "https://api.openweathermap.org/data/2.5/weather?lat=20.5000&lon=-86.9500&units=imperial&appid=2a2cc982298750eb39fb8f6efb6d7dba"


fetch(apiURL)
   .then((response) => response.json())
   .then((jsObject) => {
      console.log(jsObject);
      document.getElementById('current').textContent = jsObject.weather[0].description;
      document.getElementById('current-temp').textContent = parseFloat(jsObject.main.temp).toFixed(0);
      document.getElementById('humidity').textContent = jsObject.main.humidity;
      
      console.log(parseFloat(jsObject.wind.speed).toFixed(0));
      let temp = parseFloat(jsObject.main.temp).toFixed(0);
      let wspeed = parseFloat(jsObject.wind.speed).toFixed(0);

      if (temp <= 50 && wspeed > 3.0) {
         var wchill = parseFloat(windChill(temp, wspeed)).toFixed(0);
      } else {
         wchill = "N/A";
      }

      document.getElementById('windchill').innerHTML = wchill;

      
      function windChill(tempF, speed) {
         let f = 35.74 + 0.6215 * tempF - 35.75 * Math.pow(speed, 0.16) + 0.4275 * tempF * Math.pow(speed, 0.16)
         return f
      }
   });



const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?lat=20.5000&lon=-86.9500&units=imperial&appid=2a2cc982298750eb39fb8f6efb6d7dba"

fetch(forecastURL)
   .then((response) => response.json())
   .then((jsObject) => {
      console.log(jsObject);
      const days = jsObject['list'];
      //changed i<days.length to i<22
      for (let i = 0; i < days.length; i++) {
         if (days[i].dt_txt.includes("18:00:00")) {
            imagesrc = 'https://api.openweathermap.org/img/w/' + days[i].weather[0].icon + '.png';
            let forecast = document.createElement('section');
            forecast.className = 'forecastCard'
            let dow = document.createElement('div');
            dow.className = 'dayofweek';
            let curimg = document.createElement('div');
            curimg.className = 'currentimage';
            let curtemp = document.createElement('div');
            curtemp.className = 'currenttemp';
            let day = document.createElement('p');
            let img = document.createElement('img');
            let temp = document.createElement('p');

            day.textContent = getDayOfWeek(new Date(days[i].dt_txt));
            img.setAttribute('src', imagesrc);
            img.setAttribute('alt', days[i].weather.description);
            img.setAttribute('title', days[i].weather.main);
            temp.textContent = parseInt(days[i].main.temp) + ' ℉';

            dow.appendChild(day);
            curimg.appendChild(img);
            curtemp.appendChild(temp);
            forecast.appendChild(dow);
            forecast.appendChild(curimg);
            forecast.appendChild(curtemp);

            document.querySelector('div.forecast').appendChild(forecast);
         }
      }
   });

function getDayOfWeek(d) {
   let dayofweek = [
      "Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat",
   ]

   return dayofweek[d.getDay()];
}

/***********************Picture Slider***************************/
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("myslides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

/***********************JSON Retrieve***************************/
