import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/services")
      .then((response) => {
        setServices(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <div className="bg-gray-950 mt-16 lg:mt-24">
        <div className="mx-auto max-w-screen-xl px-6 md:px-8">
          <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-center text-2xl tracking-tighter font-bold text-white md:mb-6 lg:text-4xl">
              WHAT WE PROVIDE
            </h2>
            <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
              This is a section of some simple filler text, also known as
              placeholder text. It shares some characteristics of a real written
              text but is random or otherwise generated.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 md:gap-12 xl:grid-cols-3 xl:gap-16">
            {services.map((service) => (
              <Card
                key={service.id}
                url={service.url}
                title={service.title}
                description={service.description}
                price={service.price}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Card({ url, title, description, price }) {
  return (
    <div className="flex gap-5 md:gap-6">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gray-800 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
        <img src={url} alt="" />
      </div>

      <div>
        <h3 className="mb-2 text-white text-lg font-semibold md:text-xl">
          {title}
        </h3>
        <p className="mb-2 text-gray-500">{description}</p>
        <p className="font-bold text-orange-600">From ${price}</p>
      </div>
    </div>
  );
}
