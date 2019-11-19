var apiKey = '3f56d66bf44e9bbf90cbf9c5a0db23a5';
var url = 'https://samples.openweathermap.org/data/2.5/forecast/hourly?zip=10012&appid=3f56d66bf44e9bbf90cbf9c5a0db23a5';

console.log('Hello, Sheet!');

window.onload = requestJSON;
setInterval(requestJSON, 2000);

function requestJSON() {
  url = 'https://api.openweathermap.org/data/2.5/weather?q=London&APPID=' + apiKey;
  fetch(url)
    .then(response => response.json())
    .then(gotJSON);
}

function gotJSON(json) {
  console.log('Update Data');
  const weatherInfo = json.weather;
  console.log(json);

  const answer = document.getElementById('answer');
  const answer2 = document.getElementById('answer2');
 
  answer.innerHTML = ' ';
  answer2.innerHTML = ' ';

  for (const weather of weatherInfo) {
    const desc = json.main.temp_min;
    const desc2 = json.main.temp_max;
    console.log(desc);
    console.log(desc2);
 
    //convert to farenheit
    var calculatedMin = Math.floor(desc-273.15)*9/5 + 32;
    console.log(calculatedMin);
    var calculatedMax = Math.floor(desc2-273.15)*9/5 + 32;
    console.log(calculatedMax);


    const newH3 = document.createElement('H3');
    newH3.innerHTML = calculatedMin +'°F';
    const newH2 = document.createElement('H2');
    newH2.innerHTML = calculatedMax+'°F';
    answer.appendChild(newH3);
    answer2.appendChild(newH2);
   }
  }

