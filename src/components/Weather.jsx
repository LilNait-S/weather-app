import React from "react";
import Forecast from "./Forecast";
import TemperatureAndDetails from "./TemperatureAndDetails";
import TimeAndLocation from "./TimeAndLocation";

function WeatherData({ weather }) {
  return (
    <>
      <TimeAndLocation weather={weather} />
      <TemperatureAndDetails weather={weather} />
      <Forecast title="Hourly forecast" items={weather.hourly} />
      <Forecast title="Daily forecast" items={weather.daily}/>
    </>
  );
}

function NoWeatherData() {
  return (
    <div className="h-screen grid place-content-center" >
      <p>No se encontraron resultados para la ciudad</p>
    </div>
  );
}

const Weather = ({ weather }) => {
  const hasWeather = Object.keys(weather)?.length > 0;
  return hasWeather ? <WeatherData weather={weather} /> : <NoWeatherData />;
};

export default Weather;
