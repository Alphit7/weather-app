let cityInput = document.querySelector(".City__Input");
let autocompleteItems = document.querySelector(".Autocomplete__Items");
export function autocomplete() {
  let cityName = cityInput.value;
  fetch(
    "http://api.openweathermap.org/geo/1.0/direct?q=" +
      cityName +
      "&limit=5&appid=b73486c78e9198f709d2d910b61a45a6"
  )
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      autocompleteItems.innerHTML = "";
      json.forEach((element) => {
        console.log(element.name);
        let suggestions = document.createElement("div");
        suggestions.textContent = element.name + "," + element.country;
        autocompleteItems.appendChild(suggestions);
        suggestions.addEventListener("click", (event) => {
          cityName = event.target.innerHTML;
          cityInput.value = cityName;
          autocompleteItems.innerHTML = "";
        });
      });
    });
}
