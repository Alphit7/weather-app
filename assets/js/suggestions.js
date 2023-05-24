let cityInput = document.querySelector(".City__Input");
let autocompleteItems = document.querySelector(".Autocomplete__Items");
export function autocomplete() {
  let options = {
    method: "GET",
    headers: { "x-api-key": "lmNtMYfnUgxj8REbKU4eBA==KtPvYKDZJmqYxk7h" },
  };
  let cityName = cityInput.value;
  let url = "https://api.api-ninjas.com/v1/city?name=" + cityName + "&limit=30";
  if (cityName !== "") {
    fetch(url, options)
      .then((response) => response.json())
      .then((json) => {
        autocompleteItems.innerHTML = "";
        json.forEach((element) => {
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
  } else {
    autocompleteItems.innerHTML = "";
  }
}
