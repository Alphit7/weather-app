let weatherContainer = document.querySelector(".Weather");

export function getWeather(lat, lon) {
  fetch(
    "https://api.openweathermap.org/data/2.5/forecast?lat=" +
      lat +
      "&lon=" +
      lon +
      "&units=metric&cnt=40&appid=b73486c78e9198f709d2d910b61a45a6"
  )
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      let weatherCity = document.createElement("div");
      weatherCity.setAttribute("class", "Weather__City");
      weatherContainer.appendChild(weatherCity);
      let todayTemperature = document.createElement("span");
      weatherCity.appendChild(todayTemperature);
      todayTemperature.textContent = "Today: " + json.list[0].main.temp + "°C";
      let tomorrowTemperature = document.createElement("span");
      weatherCity.appendChild(tomorrowTemperature);
      tomorrowTemperature.textContent =
        "Tomorrow: " + json.list[8].main.temp + "°C";
      let twoDaysTemperature = document.createElement("span");
      weatherCity.appendChild(twoDaysTemperature);
      twoDaysTemperature.textContent =
        "In two days: " + json.list[16].main.temp + "°C";
      let threeDaysTemperature = document.createElement("span");
      weatherCity.appendChild(threeDaysTemperature);
      threeDaysTemperature.textContent =
        "In three days: " + json.list[24].main.temp + "°C";
      let fourDaysTemperature = document.createElement("span");
      weatherCity.appendChild(fourDaysTemperature);
      fourDaysTemperature.textContent =
        "In four days: " + json.list[32].main.temp + "°C";
    });
}
