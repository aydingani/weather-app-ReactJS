import { useState } from "react";
import "./App.css";
import SearchBar from "./SearchBar";
import WeatherDisplay from "./WeatherDisplay";

function App() {
  const API_KEY = "af907020cc1bc617fb6b8e500b74fef9";
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

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
      <SearchBar onCityChange={setCity} onGetWeather={handleGetWeather} />
      {errorMessage && <p>{errorMessage}</p>}
      {weatherData && <WeatherDisplay weatherData={weatherData} />}
    </div>
  );
}

export default App;
