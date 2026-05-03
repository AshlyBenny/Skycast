 #  SkyCast — Weather Web Application

A clean and minimal weather app that fetches real-time weather data and forecasts using the OpenWeather API.

> **[ Try it Live](https://ashlybenny.github.io/Skycast/)**

---

##  Features

-  Search weather by city name
-  Displays current temperature and weather condition
-  Shows feels-like temperature, humidity, and wind speed
-  5-day weather forecast with daily overview
-  Real-time data via OpenWeather API
-  Responsive design — works on mobile and desktop

---

##  Technologies Used

| Layer      | Technology         |
|------------|--------------------|
| Frontend   | HTML, CSS, JavaScript |
| API        | [OpenWeather API](https://openweathermap.org/api) |
| Deployment | GitHub Pages       |

---

##  How to Use

1. Visit the [live app](https://ashlybenny.github.io/Skycast/)
2. Type a city name in the search box
3. Press **Search** or hit **Enter**
4. View current weather and 5-day forecast

---

##  Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/AshlyBenny/Skycast.git
   cd Skycast
   ```

2. Get a free API key from [OpenWeather](https://openweathermap.org/api)

3. Open `script.js` and replace the API key:
   ```javascript
   const API_KEY = "your_api_key_here";
   ```

4. Open `index.html` in your browser — done!

---

##  Project Structure

```
Skycast/
├── index.html    # Main HTML structure
├── style.css     # Styling and layout
├── script.js     # API calls and logic
└── README.md
```

---

## Notes

- Weather data is powered by the **OpenWeather API** (free tier)
- API key is stored in `script.js` — do not commit real keys to public repos
- Results depend on accurate city name input

---

##  Project Purpose

Built to practice **API integration** and handling **real-time JSON data** in a frontend web app. Focuses on parsing API responses and presenting data in a user-friendly interface.

---

## Author

**Ashly Benny** — [GitHub](https://github.com/AshlyBenny)
