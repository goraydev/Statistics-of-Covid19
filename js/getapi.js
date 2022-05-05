export function getApi(country, date) {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'covid-193.p.rapidapi.com',
            'X-RapidAPI-Key': 'a54eb37d98msh9f27d745384be7fp11dd52jsn093986e69fb8'
        }
    };

    fetch(`https://covid-193.p.rapidapi.com/history?country=${country}&day=${date}`, options)
        .then(response => response.json())
        .then(response => results(response))
        .catch(err => console.error(err));
}

function results(response) {
    
    const { country, day, cases, deathes, tests } = response.response[0];

}

