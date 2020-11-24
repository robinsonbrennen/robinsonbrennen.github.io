const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=2a2cc982298750eb39fb8f6efb6d7dba&";



fetch(apiURL)
   .then((response) => response.json())
   .then((jsObject) => {
      console.log(jsObject);
      // document.getElementById('current-temp').textContent = jsObject.main.temp;

      
   
      const curtemp = document.querySelector('#current-temp');
      const windspeed = document.querySelector('#windspeed')
      const iconsource = document.querySelector('#imagesrc')
      const weathericon = document.querySelector('#icon')

      curtemp.innerHTML = jsObject.main.temp;
      windspeed.innerHTML = jsObject.wind.speed;

      iconsource.textContent = 'https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png';
      const isrc = 'https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png'

      weathericon.setAttribute('src', isrc);
      weathericon.setAttribute('alt', jsObject.weather[0].description);

      
   });
