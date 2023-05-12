import { useState } from "react";
import "./App.css";
import SearchBar from "./SearchBar";
import WeatherDisplay from "./WeatherDisplay";

function App() {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleGetWeather = async () => {
    if (!city) {
      setWeatherData(null);
      setErrorMessage("Please enter a city name");
      return;
    }

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

  const getWeatherEmoji = (temperature) => {
    if (temperature < 5) {
      return "❄️"; //too cold
    } else if (temperature >= 5 && temperature < 20) {
      return "⛅️"; //partially cloudy
    } else {
      return "☀️";
    }
  };

  return (
    <div className="everything">
      <SearchBar onCityChange={setCity} onGetWeather={handleGetWeather} />
      {errorMessage && <p>{errorMessage}</p>}
      {weatherData && (
        <WeatherDisplay
          weatherData={weatherData}
          getWeatherEmoji={getWeatherEmoji}
        />
      )}
    </div>
  );
}

export default App;
