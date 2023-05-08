import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const API_KEY = "af907020cc1bc617fb6b8e500b74fef9";
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleGetWeather = async () => {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    );
    const data = await res.json();
    setWeatherData(data);
  };

  return (
    <div>
      <p>Weather App is loading...</p>
      <input type="text" onChange={handleCityChange} />
      <button onClick={handleGetWeather}>Get Weather</button>
      {weatherData && (
        <div>
          <h1>{weatherData.name}</h1>
          <p>
            Temperature: {Math.round(weatherData.main.temp - 273.15)}°C /{" "}
            {Math.round(((weatherData.main.temp - 273.15) * 9) / 5 + 32)}°F
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
