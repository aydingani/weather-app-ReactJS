const SearchBar = ({ onCityChange, onGetWeather }) => {
  const handleCityChange = (e) => {
    onCityChange(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onGetWeather();
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        className="city-input"
        onChange={handleCityChange}
        onKeyDown={handleKeyDown}
        placeholder="Search City"
      />
      <button className="get-weather-btn" onClick={onGetWeather}>
        Get Weather
      </button>
    </div>
  );
};

export default SearchBar;
