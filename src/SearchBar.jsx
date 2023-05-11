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
    <div>
      <input
        type="text"
        onChange={handleCityChange}
        onKeyDown={handleKeyDown}
      />
      <button onClick={onGetWeather}>Get Weather</button>
    </div>
  );
};

export default SearchBar;
