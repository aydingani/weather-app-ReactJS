import { useState } from "react";
import "./App.css";

function App() {
  const API_KEY = "af907020cc1bc617fb6b8e500b74fef9";
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const options = { day: "numeric", month: "long", year: "numeric" };
  const today = new Date().toLocaleDateString("en-US", options);

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleGetWeather = async () => {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    );
    const data = await res.json();
    console.log(data);
    if (data.cod == "404") {
      setWeatherData(null);
      setErrorMessage(
        "City not found. Please check your spelling and try again."
      );
    } else {
      setWeatherData(data);
      setErrorMessage("");
    }
  };

  return (
    <div>
      <input type="text" onChange={handleCityChange} />
      <button onClick={handleGetWeather}>Get Weather</button>
      {errorMessage && <p>{errorMessage}</p>}
      {weatherData && (
        <div>
          <h1>
            {weatherData.name}, {weatherData.sys.country}
          </h1>
          <h2>{today}</h2>
          <p>
            Temperature: {Math.round(weatherData.main.temp - 273.15)}°C /{" "}
            {Math.round(((weatherData.main.temp - 273.15) * 9) / 5 + 32)}°F
          </p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Wind: {weatherData.wind.speed}km/h</p>
        </div>
      )}
    </div>
  );
}

export default App;
