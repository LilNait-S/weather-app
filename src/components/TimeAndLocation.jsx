import { formatToLocalTime } from "../services/weatherService";

const TimeAndLocation = ({weather : { dt, name , country,timezone}}) => {
  
  return (
    <section className="flex flex-col justify-center items-center max-w-5xl mx-auto gap-3 py-5">
      <div className="text-xl font-light">
        <p>{formatToLocalTime(dt , timezone)}</p>
      </div>
      <div className=" text-5xl font-bold">
        <p>
          {name} , {country}
        </p>
      </div>
    </section>
  );
};

export default TimeAndLocation;
