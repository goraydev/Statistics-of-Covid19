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

    if (response.response.length) {

        const results = document.querySelector('.results');
        results.classList.remove('hidden');
        uiResults(response);
        
    } else {
        errorAlert();
    }


}


function uiResults(response) {
    console.log(response.response[0]);
    const { country, day, cases, deaths, tests } = response.response[0];


    const titleCountry = document.querySelector('.titleCountry');
    titleCountry.textContent = country;

    const titleDate = document.querySelector('.titleDate');
    titleDate.textContent = day;


    const pCases = document.querySelector('#pCases');
    pCases.textContent = cases.total;

    const pDeaths = document.querySelector('#pDeaths');
    pDeaths.textContent = deaths.total;

    const pTest = document.querySelector('#pTests');
    pTest.textContent = tests.total;

}


function errorAlert() {
    Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Not found',
        showConfirmButton: false,
        timer: 2000
    })
}
