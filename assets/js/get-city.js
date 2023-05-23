import { getWeather } from "./get-weather.js";
let autocompleteItems = document.querySelector(".Autocomplete__Items");
let cityInput = document.querySelector(".City__Input");
export let names = [];
export function getCityName(event) {
  let cityName = cityInput.value;
  if (cityName !== "") {
    fetch(
      "http://api.openweathermap.org/geo/1.0/direct?q=" +
        cityName +
        "&limit=5&appid=b73486c78e9198f709d2d910b61a45a6"
    )
      .then((response) => response.json())
      .then((json) => {
        let lon = json[0].lon;
        let lat = json[0].lat;
        getWeather(lat, lon, json[0].name);
        cityInput.value = "";
        autocompleteItems.innerHTML = "";
      })
      .catch((error) => {
        alert("There was an error", error);
        console.log(error);
      });
  }
}
