const WeatherDisplay = ({ weatherData, getWeatherEmoji }) => {
  const options = { day: "numeric", month: "long", year: "numeric" };
  const today = new Date().toLocaleDateString("en-US", options);
  const celsius = Math.round(weatherData.main.temp - 273.15);
  const fahrenheit = Math.round(
    ((weatherData.main.temp - 273.15) * 9) / 5 + 32
  );
  const weatherEmoji = getWeatherEmoji(celsius);

  return (
    <div className="weather-display">
      <h3>
        {weatherEmoji} {weatherData.name}, {weatherData.sys.country}
      </h3>
      <h3>📅 {today}</h3>
      <p>
        🌡️ Temperature: {celsius}°C / {fahrenheit}°F
      </p>
      <p>💧 Humidity: {weatherData.main.humidity}%</p>
      <p>🍃 Wind: {weatherData.wind.speed}km/h</p>
    </div>
  );
};

export default WeatherDisplay;
