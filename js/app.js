import { getApi } from "./getapi.js";

//add year
const fieldYear = document.querySelector('.rights');
let year = new Date().getFullYear();
fieldYear.textContent = year;

const country = document.querySelector('#country');
const date = document.querySelector('#date');
const form = document.querySelector('#form');

eventListeners();
function eventListeners() {
    form.addEventListener('submit', validateInputs);
}

function validateInputs(e) {
    e.preventDefault();

    getApi(country.value, date.value);
}




