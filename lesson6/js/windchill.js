/*
get input values of temperature and wind speed 
check to make sure they are valid entries 
calculate and display windchill or display n/a if
windchill values not applicable
*/



/*Inputs*/
var temperature = 
var windspeed = 
var windchill;


windchill = 35.74 + (.06215 * temperature) - (35.75 * (windspeed^.16)) + 
            ((.4275 * temperature) * (windspeed ^ .16));

if (temperature <= 50 && windspeed < 3.0)
   windchill = "N/A";
else
   return windchill;


   let temperature = parseFloat(document.getElementById('temp').innerText);
   let windspeed = parseFloat(document.getElementById('wind').innerText);
   var windchillval = (35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windspeed, 0.16)) + ((0.4275 * temperature) * Math.pow(windspeed, 0.16)));
   
   if (temperature <= 50 && windspeed >= 3.0) {
       document.getElementById('windchill').innerHTML = windchillval.toFixed(2);
   } else {
       document.getElementById('windchill').innerHTML = "N/A";
   } 