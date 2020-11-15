const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
   .then(function (response) {
      return response.json();
   })
   .then(function (jsonObject) {
      //console.table(jsonObject); // temporary checking for valid response and data parsing
      const towns = jsonObject['towns'];
      for (let i = 0; i < towns.length; i++) {
         let town = document.createElement('section');
         let info = document.createElement('div');
         info.className = 'info';
         let h2 = document.createElement('h2');
         let motto = document.createElement('p');
         let yearFounded = document.createElement('p');
         let currentPopulation = document.createElement('p');
         let averageRainfall = document.createElement('p');
         let photo = document.createElement('img');

         h2.textContent = towns[i].name;
         motto.textContent = towns[i].motto;
         yearFounded.textContent = 'Year Founded: ' + towns[i].yearFounded;
         currentPopulation.textContent = 'Population: ' + towns[i].currentPopulation;
         averageRainfall.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall;
         photo.setAttribute('src', 'images/' + towns[i].photo);
         photo.setAttribute('alt', towns[i].name);

         info.appendChild(h2);
         info.appendChild(motto);
         info.appendChild(yearFounded);
         info.appendChild(currentPopulation);
         info.appendChild(averageRainfall);
         town.appendChild(info);
         town.appendChild(photo);

         document.querySelector('div.towns').appendChild(towns);
      }
   });

/*Footer Date*/
try {
   const options = {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
   };
   document.getElementById('currentDate').textContent = new Date().toLocaleDateString('en', options);
} catch (e) {}