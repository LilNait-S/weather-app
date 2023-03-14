import Search from "./Search";
import Weather from "./Weather";

const Header = ({
  handleSubmit,
  handleChange,
  search,
  error,
  handleUnits,
  units,
  weather,
}) => {
  return (
    <>
      <Search
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        search={search}
        error={error}
        handleUnits={handleUnits}
        units={units}
      />
      <Weather weather={weather} />
    </>
  );
};

export default Header;
