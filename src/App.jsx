import { useState } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import { useSearch } from "./hooks/useSearch";
import { useWeather } from "./hooks/useWeather";

const App = () => {
  const { search, setSearch, error } = useSearch();
  const [units, setUnits] = useState("metric");
  const { weather, getWeather, loading } = useWeather({
    search,
    unitsOfMeasurement: units,
  });

  console.log(weather);

  const handleSubmit = (e) => {
    e.preventDefault();
    const fields = Object.fromEntries(new window.FormData(e.target));
    const { city } = fields;
    getWeather({search , unitsOfMeasurement: units});
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleUnits = (e) => {
    const newUnit = e
    setUnits(newUnit);
    getWeather({search , unitsOfMeasurement : newUnit});
  };

  const handleCity = (e) => {
    const newCity = e
    setSearch(newCity)
    console.log(newCity)
    getWeather({search : newCity , unitsOfMeasurement : units });
  }

 

  return (
    <div className="bg-gradient-to-r from-violet-600 to-indigo-600 h-full text-white ">
      <div className="container mx-auto pb-4">
        <Navbar handleCity={handleCity} />
        <Header
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          search={search}
          error={error}
          handleUnits={handleUnits}
          units={units}
          weather={weather}
        />
      </div>
    </div>
  );
};

export default App;
