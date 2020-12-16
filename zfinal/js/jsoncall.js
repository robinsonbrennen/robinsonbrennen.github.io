/***********************JSON Call***************************/
const requestURL = 'https://robinsonbrennen.github.io/zfinal/json/practice.json';

fetch(requestURL)
   .then(function (response) {
      return response.json();
   })
   .then(function (jsonObject) {
      console.table(jsonObject);
      const rentals = jsonObject['rentals'];
      for (let i = 0; i < rentals.length; i++) {
         let card = document.createElement('section');
         let h2 = document.createElement('h2');
         let engine = document.createElement('p');
         let people = document.createElement('p');
         let reservehalf = document.createElement('p');
         let reservefull = document.createElement('p');
         let walkinhalf = document.createElement('p');
         let walkinfull = document.createElement('p');
         let image = document.createElement('img');


         h2.textContent = rentals[i].type;
         engine.textContent = 'Engine Type: ' + rentals[i].engine;
         people.textContent = 'Seat Limit: ' + rentals[i].people;
         reservehalf.textContent = 'Reserve Half Day: ' + rentals[i].reservehalf;
         reservefull.textContent = 'Reserve Full Day: ' + rentals[i].reservefull;
         walkinhalf.textContent = 'Walk-in Half Day: ' + rentals[i].walkinhalf;
         walkinfull.textContent = 'Walk-in Full Day: ' + rentals[i].walkinfull;
         image.setAttribute('src', rentals[i].image);
         image.setAttribute('alt', rentals[i].type);

         card.appendChild(h2);
         card.appendChild(engine);
         card.appendChild(people);
         card.appendChild(reservehalf);
         card.appendChild(reservefull);
         card.appendChild(walkinhalf);
         card.appendChild(walkinfull);
         card.appendChild(image);

         document.querySelector('div.cards').appendChild(card);
      }
   });