import React from "react";
import { cities } from "../constants";


const Navbar = ({handleCity}) => {
  return (
    <section className="w-full flex justify-center">
      <nav className="py-10 mt-5">
        <ul className="flex flex-row flex-wrap gap-14 text-lg justify-center">
          {
            cities.map((city) => (
              <button className=" py-1 px-2" key={city.id} onClick={() => handleCity(city.title)}>{city.title}</button>
            ))
          }
        </ul>
      </nav>
    </section>
  );
};

export default Navbar;
