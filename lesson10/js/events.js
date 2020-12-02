
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject); // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];
    for (let i = 0; i < towns.length; i++) {
      if (towns[i].name == "Preston") {
        let events = document.createElement('div');
        events.className = 'events';
        let h3 = document.createElement('h3');
        var theEvent = document.createElement('p');
        theEvent.textContent = towns[i].events.join('\r\n');
        // for(let i = 0; i < towns[i].events.length; i++){
        //   theEvent.textContent = towns[i].events[i];
        // }

        
        h3.textContent = 'Upcoming Events in ' + towns[i].name;
        
        events.appendChild(h3);
        events.appendChild(theEvent);

        document.querySelector('div.upcomingEvents').appendChild(events);
      }
    }
  });