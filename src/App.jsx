import "./App.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
//const url =
//  "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=1560edc39cf72fdf1b584e9593dcd968";
function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  // useEffect(() => {
  //   const data = axios
  //     .get(url)
  //     .then((res) => console.log(res))
  //     .catch((data) => console.log(data));
  // });
  const handleSearch = () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=1560edc39cf72fdf1b584e9593dcd968`;
    axios
      .get(url)
      .then((res) => setWeatherData(res.data))
      .catch((error) => console.error(error));
  };
  return (
    <>
      <h1>Weather App</h1>
      <div className="card">
        {/* Follow the weather app instructions in the exercise brief to implement this exercise */}
        <h3>Current weather in</h3>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
        />
        <br />
        <br />
        <button onClick={handleSearch}>Search</button>
        {weatherData && (
          <div>
            <h2>Weather in {city}</h2>
            <p>Temperature: {weatherData.main.temp}°C</p>
            <p>Humidity: {weatherData.main.humidity}%</p>
            <p>Weather: {weatherData.weather[0].description}</p>
            <img
              src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
              alt={weatherData.weather[0].description}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
