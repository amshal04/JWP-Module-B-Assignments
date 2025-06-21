let API_KEY = "d11507a2ef2e9ee3e55d8a0999876199";
let input = document.getElementById("searchinput");
let showDiv = document.getElementById("showData");

let searchData = async () => {
  const city = input.value.trim();
  if (!city) {
    showDiv.innerHTML = `<div class="alert alert-warning">Please enter a city name.</div>`;
    return;
  }

  try {
    showDiv.innerHTML = `<div class="spinner-border text-light" role="status"><span class="visually-hidden">Loading...</span></div>`;

    let API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    let response = await fetch(API_URL);
    let data = await response.json();

    showWeatherData(data);
  } catch (error) {
    showDiv.innerHTML = `<div class="alert alert-danger">An error occurred. Please try again later.</div>`;
  }
};

let showWeatherData = (data) => {
  if (data.cod === "404") {
    showDiv.innerHTML = `<div class="alert alert-danger">City not found. Try again.</div>`;
  } else {
    showDiv.innerHTML = `
      <div class="card text-light bg-dark shadow p-3">
        <h4 class="card-title">${data.name}, ${data.sys.country}</h4>
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" class="mx-auto d-block" alt="icon">
        <h2>${data.main.temp}°C</h2>
        <p class="mb-1"><strong>Condition:</strong> ${data.weather[0].main}</p>
        <p class="mb-1"><strong>Feels Like:</strong> ${data.main.feels_like}°C</p>
        <p class="mb-1"><strong>Humidity:</strong> ${data.main.humidity}%</p>
        <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
      </div>`;
  }
};
