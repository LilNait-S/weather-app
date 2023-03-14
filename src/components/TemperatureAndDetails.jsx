import {
  BsFillSunFill,
  BsWind,
  BsFillSunsetFill,
  BsArrowUp,
  BsArrowDown,
} from "react-icons/bs";
import { TbTemperature } from "react-icons/tb";
import { WiHumidity } from "react-icons/wi";
import { formatToLocalTime, iconUrlFromCode } from "../services/weatherService";

const TemperatureAndDetails = ({
  weather: {
    description,
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like,
    timezone,
  },
}) => {
  return (
    <section className="flex flex-col gap-12 max-w-5xl mx-auto py-20">
      <div className="text-3xl font-bold flex justify-center">
        <p>{description.toUpperCase().slice(0,1) + description.slice(1)}</p>
      </div>
      <div className="flex items-center justify-around">
        <img src={iconUrlFromCode(icon)} />
        <p className="text-7xl">{`${temp.toFixed()}°`}</p>
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-center gap-2 text-lg">
            <TbTemperature className="text-2xl" />
            <p>Real fell:</p>
            <span>{`${feels_like.toFixed()}°`}</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-lg">
            <WiHumidity className="text-3xl" />
            <p>Humidity:</p>
            <span>{`${humidity.toFixed()}%`}</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-lg">
            <BsWind className="text-xl" />
            <p>Wind:</p>
            <span>{`${speed.toFixed()} km/h`}</span>
          </div>
        </div>
      </div>
      
      <div className="flex gap-10 mx-auto text-xl">
        <div className="flex gap-3 items-center">
          <BsFillSunFill />
          <p className="font-light">
            Rise:
            <span className="font-medium"> {formatToLocalTime(sunrise,timezone, "hh:mm a")}</span>
          </p>
        </div>
        |
        <div className="flex gap-3 items-center">
          <BsFillSunsetFill />
          <p className="font-light">
            Set:
            <span className="font-medium"> {formatToLocalTime(sunset,timezone, "hh:mm a")}</span>
          </p>
        </div>
        |
        <div className="flex gap-3 items-center">
          <BsArrowUp />
          <p className="font-light">
            High:
            <span className="font-medium"> {`${temp_max.toFixed()}°`}</span>
          </p>
        </div>
        |
        <div className="flex gap-3 items-center">
          <BsArrowDown />
          <p className="font-light">
            Low:
            <span className="font-medium"> {`${temp_min.toFixed()}°`}</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default TemperatureAndDetails;
