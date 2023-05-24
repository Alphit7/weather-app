import { getCityName, names } from "./get-city.js";
import { autocomplete } from "./suggestions.js";

let cityInput = document.querySelector(".City__Input");
let submit = document.querySelector(".City__Submit");

submit.addEventListener("click", getCityName);
cityInput.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    getCityName();
  }
});

cityInput.addEventListener("input", autocomplete);
