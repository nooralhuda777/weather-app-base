import axios from "axios";
import React, { useEffect } from "react";
const url =
  "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=63a5e74a19a61c755ef80e4a81e6d99e";

function Weather() {
  useEffect(() => {
    axios.get(url);
  });
  return <div>Weather</div>;
}

export default Weather;
