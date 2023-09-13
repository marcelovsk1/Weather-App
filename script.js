const key = "d17735e5cec9ef34430f73a92b7fdc37"

function insertDataOnScreen(data) {
  console.log(data)
  document.querySelector(".city").innerHTML = "Weather in " + data.name;
  document.querySelector(".temperature").innerText = Math.floor(data.main.temp) + "ºC";
  document.querySelector(".texto-previsao").innerHTML = data.weather[0].description;
  document.querySelector(".moisture").innerHTML = data.main.humidity + "% Air Humidity";
  document.querySelector(".img-previsao").src =`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
}

async function searchCity(city){

  const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`).then( response => response.json() );

  insertDataOnScreen(data);
}


function clickButton() {
  const city = document.querySelector(".input-city").value;
  console.log(city);

  searchCity(city);
}
