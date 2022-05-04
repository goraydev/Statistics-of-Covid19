eventListeners();
function eventListeners() {
    document.addEventListener('DOMContentLoaded', getApi);
}

function getApi() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'covid-193.p.rapidapi.com',
            'X-RapidAPI-Key': 'a54eb37d98msh9f27d745384be7fp11dd52jsn093986e69fb8'
        }
    };

    fetch('https://covid-193.p.rapidapi.com/statistics?country=Peru', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}