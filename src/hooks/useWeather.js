import { useState } from "react";
import {
  getFormattedWeatherData,
  getWeatherData,
  getWeatherDataPosition,
} from "../services/weatherService";

export function useWeather() {
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [weatherPosition, setWeatherPosition] = useState({})

  const getWeather = async ({ search, unitsOfMeasurement }) => {
    try {
      setLoading(true);
      setError(null);

      const newWeather = await getWeatherData({
        search,
        unitsOfMeasurement,
      }).then(({ formattedWeatherData, unitsOfMeasurement }) => {
        const data = formattedWeatherData;
        const formatedData = getFormattedWeatherData({
          dataParams: data,
          units: unitsOfMeasurement,
        }).then(({ combinedData }) => {
          return combinedData;
        });
        return formatedData;
      });
      setWeather(newWeather);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  const getWeatherPosition = async ({ unitsOfMeasurement, lat, lon }) => {
    try {
      setLoading(true);
      setError(null);

      const newWeather = await getWeatherDataPosition({
        unitsOfMeasurement,
        lat,
        lon,
      }).then(({ formattedWeatherData, unitsOfMeasurement }) => {
        const data = formattedWeatherData;
        const formatedData = getFormattedWeatherData({
          dataParams: data,
          units: unitsOfMeasurement,
        }).then(({ combinedData }) => {
          return combinedData;
        });
        return formatedData;
      });
      setWeather(newWeather);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  return { weather, getWeather, setWeather, loading, getWeatherPosition, weatherPosition };
}
