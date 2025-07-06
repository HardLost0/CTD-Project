const api = ''

document.querySelector('button').addEventListener('click', async () => {
  const city = document.getElementById('cityInput').value.trim();
  
  if (!city) {
    alert("Please enter a city name.");
    return;
  }

  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${api}&q=${(city)}`
    );
    const data = await response.json();

    displayWeather(data);
  } catch (error) {
    showError(error.message);
  }
});

function displayWeather(data) {
  document.getElementById('weatherResults').innerHTML = `
    <div class="weather-card">
      <h2>${data.location.name}, ${data.location.country}</h2>
      <p>${data.current.temp_f}°F</p>
    </div>
  `;
}

function showError(message) {
  document.getElementById('weatherResults').innerHTML = `
    <div class="weather-card error">
      <p>Please Enter a City</p>
    </div>
  `;
}