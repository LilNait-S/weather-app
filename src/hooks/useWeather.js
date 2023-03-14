import { useState } from "react";
import {
  getFormattedWeatherData,
  getWeatherData,
} from "../services/weatherService";

export function useWeather({ search, unitsOfMeasurement }) {
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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
          console.log(combinedData)
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

  return { weather, getWeather, loading };
}
