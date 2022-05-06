import { getApi } from "./getapi.js";

//add year
const fieldYear = document.querySelector('.rights');
let year = new Date().getFullYear();
fieldYear.textContent = year;

const country = document.querySelector('#country');
const date = document.querySelector('#date');
const form = document.querySelector('#form');
const results = document.querySelector('.results');

eventListeners();
function eventListeners() {

    document.addEventListener('DOMContentLoaded', hiddenResults);

    form.addEventListener('submit', validateInputs);
}


function hiddenResults() {
    results.classList.add('hidden');
}

function validateInputs(e) {
    e.preventDefault();

    getApi(country.value, date.value);
}




