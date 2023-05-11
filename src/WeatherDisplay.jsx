const WeatherDisplay = ({ weatherData }) => {
  const options = { day: "numeric", month: "long", year: "numeric" };
  const today = new Date().toLocaleDateString("en-US", options);

  return (
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
  );
};

export default WeatherDisplay;
