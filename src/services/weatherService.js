import { DateTime } from "luxon";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export const getWeatherData = async ({ search, unitsOfMeasurement}) => {
  if (search === "") return null;
 
  try {
    const res = await fetch(
      `${BASE_URL}/weather?q=${search}&appid=${API_KEY}&units=${unitsOfMeasurement}`
    );

    console.log(res)
    const data = await res.json();

    const formattedWeatherData = {
      lon: data.coord.lon,
      lat: data.coord.lat,
      temp: data.main.temp,
      feels_like: data.main.feels_like,
      temp_min: data.main.temp_min,
      temp_max: data.main.temp_max,
      humidity: data.main.humidity,
      name: data.name,
      dt: data.dt,
      country: data.sys.country,
      sunrise: data.sys.sunrise,
      sunset: data.sys.sunset,
      speed: data.wind.speed,
      main: data.weather[0].main,
      description: data.weather[0].description,
      icon: data.weather[0].icon,
    };

    return { formattedWeatherData, unitsOfMeasurement };
  } catch (e) {
    throw new Error("error searching weather");
  }
};

const formatForecastWeather = (data) => {
  let { timezone, daily, hourly } = data;

  daily = daily.slice(1, 6).map((d) => {
    return {
      title: formatToLocalTime(d.dt, timezone, "ccc"),
      temp: d.temp.day,
      icon: d.weather[0].icon,
    };
  });

  hourly = hourly.slice(1, 6).map((d) => {
    return {
      title: formatToLocalTime(d.dt, timezone, "hh:mm a"),
      temp: d.temp,
      icon: d.weather[0].icon,
    };
  });

  return { timezone, daily, hourly };
};

export const getFormattedWeatherData = async ({ dataParams, units }) => {
  try {
    const { lon, lat } = dataParams;
    const res = await fetch(
      `${BASE_URL}/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,alerts&appid=${API_KEY}&units=${units}`
    );

    const data = await res.json();
    const formatData = formatForecastWeather(data);
    const combinedData = { ...formatData, ...dataParams };
    return { combinedData };
  } catch (e) {
    throw new Error("error searching Formater weather");
  }
};

export const formatToLocalTime = (
  secs,
  zone,
  format = "cccc, dd LLL yyyy' | Local time : 'hh:mm a"
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

export const iconUrlFromCode = (code) =>
  `https://openweathermap.org/img/wn/${code}@2x.png`;
