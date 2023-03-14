import { BsSearch } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";

const Search = ({
  handleSubmit,
  handleChange,
  search,
  error,
  handleUnits,
  units,
}) => {
  return (
    <div className="flex justify-between items-center gap-10 py-4 max-w-5xl mx-auto">
      <div className="flex items-center gap-5">
        <div>
          <form className="flex items-center gap-5" onSubmit={handleSubmit}>
            <input
              style={{
                border: "1px solid transparent",
                borderColor: error ? "red" : "transparent",
              }}
              className="rounded-full py-2 px-4  text-slate-700"
              placeholder="Lima"
              type="text"
              name="city"
              value={search}
              onChange={handleChange}
            />
            <button type="submit">
              <BsSearch
                size={25}
                className="text-white cursor-pointer transition ease-out hover:scale-110"
              />
            </button>
          </form>
          {error && <p style={{ color: "white" }}>{error}</p>}
        </div>
        <IoLocationOutline
          size={33}
          className="text-white cursor-pointer transition ease-out hover:scale-110"
          onClick={() => {}}
        />
      </div>
      <div className="flex gap-5 text-3xl">
        <button
          onClick={() => {
            handleUnits("metric");
          }}
          value={units}
          className="transition ease-out hover:scale-110"
        >
          °C
        </button>
        |
        <button
          onClick={() => {
            handleUnits("imperial");
          }}
          value={units}
          className="transition ease-out hover:scale-110"
        >
          °F
        </button>
      </div>
    </div>
  );
};

export default Search;
