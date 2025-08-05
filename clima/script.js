// efca289ee5534fd4bf501632250308 APIKey

const cityInput = document.getElementById('city-input');
const searchBtn = document.getElementById('search-btn');
const weatherResult = document.getElementById('weather-result');
const errorMessage = document.getElementById('error-message');

async function fetchClima(nameCity) {
    try{
        const lowerCaseCity = nameCity.toLowerCase();
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=efca289ee5534fd4bf501632250308&q=${lowerCaseCity}&aqi=no&lang=pt`);

        if(!response.ok){
            throw new Error(`Cidade '${nameCity}' não encontrada!`);
        }

        const data = await response.json();
        renderClimaCard(data);

    } catch(error){
        renderError(error.message);
    }
}

function renderClimaCard(city){
    weatherResult.classList.remove('hidden');
    weatherResult.innerHTML = '';

    const cardHTML= `
        <h2 id="city-name">${city.location.name}, ${city.location.country}, ${city.location.region}</h2>
            <p id="local-time" class="local-time">Horário Local: ${city.location.localtime}</p>

            <div class="weather-main">
                <img id="weather-icon" src="${city.current.condition.icon}" alt="Ícone do tempo">
                <p id="temperature">${city.current.temp_c} C°</p>
            </div>
            <p id="condition">${city.current.condition.text}</p>

            <div class="weather-details">
                <div class="detail-item">
                    <span>Sensação</span>
                    <strong id="feels-like">${city.current.feelslike_c} C°</strong>
                </div>
                <div class="detail-item">
                    <span>Umidade</span>
                    <strong id="humidity">${city.current.humidity} %</strong>
                </div>
                <div class="detail-item">
                    <span>Vento</span>
                    <strong id="wind-speed">${city.current.wind_kph} km/h</strong>
                </div>
                <div class="detail-item">
                    <span>Pressão</span>
                    <strong id="pressure">${city.current.pressure_mb} mb</strong>
                </div>
                <div class="detail-item">
                    <span>Visibilidade</span>
                    <strong id="visibility">${city.current.vis_km} km</strong>
                </div>
                <div class="detail-item">
                    <span>Índice UV</span>
                    <strong id="uv-index">${city.current.uv}</strong>
                </div>
            </div>
    `
    weatherResult.innerHTML = cardHTML;

}

function renderError() {
    weatherResult.classList.add('hidden');
    errorMessage.classList.remove('hidden');   
}

searchBtn.addEventListener('click', () => {
    const nameCity = cityInput.value.trim();
    if (nameCity) {
        errorMessage.classList.add('hidden');
        
        fetchClima(nameCity);
    } else {
        renderError();
    }
});

cityInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        searchBtn.click();
    }
});