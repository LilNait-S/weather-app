import { iconUrlFromCode } from "../services/weatherService";

const Forecast = ({ title, items }) => {
  return (
    <section className="max-w-5xl mx-auto">
      <div className="flex justify-start ">
        <p className="font-medium uppercase text-xl">{title}</p>
      </div>
      <hr className="my-2 mb-10" />
      <div className="flex justify-around mb-14">
        {items.map((item) => (
          <div key={item.title} className="flex flex-col items-center gap-6">
            <p className="font-light">{item.title}</p>
            <img src={iconUrlFromCode(item.icon)} alt={item.title}/>
            <p className="font-medium">{`${item.temp.toFixed()}°`}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Forecast;
