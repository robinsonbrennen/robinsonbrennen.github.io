const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';


fetch(requestURL)
   .then(function (response) {
      return response.json();
   })
   .then(function (jsonObject) {
      //console.table(jsonObject); // temporary checking for valid response and data parsing
      let countimg = 0;
      let counttext = 0;
      const towns = jsonObject['towns'];
      for (let i = 0; i < towns.length; i++) {
         if (towns[i].name == "Fish Haven" || towns[i].name == "Preston" || towns[i].name == "Soda Springs") {
            let town = document.createElement('section');
            let info = document.createElement('div');
            info.className = 'info';
            let h2 = document.createElement('h2');
            let motto = document.createElement('h4');
            let founded = document.createElement('p');
            let pop = document.createElement('p');
            let avgRain = document.createElement('p');
            let img = document.createElement('img');


            h2.textContent = towns[i].name;
            motto.textContent = towns[i].motto;
            founded.textContent = 'Year Founded: ' + towns[i].yearFounded;
            pop.textContent = 'Population: ' + towns[i].currentPopulation;
            avgRain.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall;
            img.setAttribute('src', 'images/' + towns[i].photo);
            img.setAttribute('alt', towns[i].name);
            img.setAttribute('class', 'fishhaven' + countimg);
            countimg++

            info.appendChild(h2);
            info.appendChild(motto);
            info.appendChild(founded);
            info.appendChild(pop);
            info.appendChild(avgRain);
            info.setAttribute('class', 'towninfo' + counttext)
            counttext++
            town.appendChild(info);
            town.appendChild(img);

            document.querySelector('div.towns').appendChild(town);
         }
      }
   });

//Format Date
let days = [
   "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
]

let months = [
   "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
]


let lastMod = new Date(document.lastModified);
let day = lastMod.getDay();
let dayOfWeek = days[lastMod.getDay()];
let month = months[lastMod.getMonth()];
let year = lastMod.getFullYear();

let currentdate = dayOfWeek + ", " + day + " " + month + " " + year;

document.getElementById('lastMod').textContent = currentdate;

//toggleMenu function
function toggleMenu() {
   document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

//Dropdown selection
function selection() {
   const s = document.querySelector('#selected');
   const sel = document.querySelector('#stormRegion');
   s.style.diplay = "block";
   s, textContent = sel.value;
}