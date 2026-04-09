const apiKey = "724a5d39344bf4ec2c529d5115825e1d";

const input = document.getElementById("cityInput");
const button = document.getElementById("searchBtn");

button.addEventListener("click", getWeather);
input.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        getWeather();
    }
});

function getIcon(weather) {
    weather = weather.toLowerCase();

    if (weather.includes("clear")) return "☀️";
    if (weather.includes("rain")) return "🌧️";
    if (weather.includes("snow")) return "❄️";
    if (weather.includes("cloud")) return "☁️";

    return "🌤️";
}

async function getWeather() {
    const city = input.value.trim();

    if (!city) {
        document.getElementById("weatherBox").innerHTML = "Enter city 😭";
        return;
    }

    document.getElementById("weatherBox").innerHTML = "Loading...";

    try {
        // CURRENT WEATHER
        const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city},IN&appid=${apiKey}&units=metric`
);
        const data = await res.json();

        if (data.cod != 200) {
            document.getElementById("weatherBox").innerHTML = "City not found 😭";
            document.getElementById("forecastBox").innerHTML = "";
            return;
        }

        const icon = getIcon(data.weather[0].main);

        document.getElementById("weatherBox").innerHTML = `
            <h2>${data.name}, ${data.sys.country}</h2>
            <div style="font-size:40px">${icon}</div>
            <p><b>${data.main.temp}°C</b></p>
            <p>${data.weather[0].main}</p>
            <p>Feels like: ${data.main.feels_like}°C</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Wind: ${data.wind.speed} m/s</p>
        `;

        // FORECAST
        const res2 = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city},IN&appid=${apiKey}&units=metric`
);
        const forecastData = await res2.json();

        let forecastHTML = "";

        // every 24h (8 intervals)
        for (let i = 0; i < 5; i++) {
            let item = forecastData.list[i * 8];

            const fIcon = getIcon(item.weather[0].main);

            forecastHTML += `
                <div class="forecast-item">
                    <div style="font-size:20px">${fIcon}</div>
                    <p>${item.main.temp}°C</p>
                    <small>${item.weather[0].main}</small>
                </div>
            `;
        }

        document.getElementById("forecastBox").innerHTML = forecastHTML;

    } catch (error) {
        document.getElementById("weatherBox").innerHTML = "Error 😭";
        document.getElementById("forecastBox").innerHTML = "";
    }
}