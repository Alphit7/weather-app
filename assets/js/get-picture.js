import { getWeather } from "./get-weather.js";

export function getPicture(cityName, weatherCity) {
  fetch(
    "https://api.unsplash.com/search/photos?&query=" +
      cityName +
      "&client_id=r61ockwiRMcSjX5m0iWMR7Xt-1lxyQ6Ky9znw4qGPhk"
  )
    .then((response) => response.json())
    .then((json) => {
      let picture = json.results[0].urls.full;
      weatherCity.style.backgroundImage = `url('${picture}')`;
      console.log(weatherCity);
    });
}
