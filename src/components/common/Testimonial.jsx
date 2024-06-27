import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import axios from "axios";
import { useState, useEffect } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselDots,
} from "../ui/carousel";

export default function Testimonial() {
  const [data, setData] = useState([]);

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  useEffect(() => {
    axios
      .get("http://localhost:3000/testimonial")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const urls = data.map((item) => item.url);
  return (
    <div>
      <Carousel
        plugins={[plugin.current]}
        className="w-full h-full bg-gray-900/50 container mt-16 lg:mt-24 px-6 py-10 mx-auto"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        opts={{
          loop: true,
        }}
      >
        <h1 className="text-2xl font-semibold text-center capitalize lg:text-3xl text-white">
          What clients saying
        </h1>
        <CarouselContent>
          {data.map((item) => (
            <CarouselItem key={item.id}>
              <Card name={item.name} message={item.message} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex flex-col items-center justify-center mt-8">
          <CarouselDots
            urls={urls}
            className="object-cover rounded-full w-14 h-14"
          />
        </div>
        <CarouselPrevious className="lg:left-20" />
        <CarouselNext className="lg:right-20" />
      </Carousel>
    </div>
  );
}
function Card({ name, message }) {
  return (
    <div>
      <section>
        <div className="">
          <div className="flex items-start max-w-6xl mx-auto mt-4">
            <div>
              <div className="mt-4 text-center">
                <h1 className="font-semibold text-white items-center text-center">
                  {name}
                </h1>
                <span className="text-sm text-gray-400">Marketer</span>
              </div>
              <p className="mt-8 flex items-center text-center text-gray-500 lg:mx-8">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aperiam, quam. Odio voluptatem officiis eos illo! Pariatur,
                totam alias. Beatae accusamus earum quos obcaecati minima
                molestias. Possimus minima dolores itaque! Esse! Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Ea voluptates
                fugiat corrupti laudantium dolores reiciendis pariatur esse quod
                nihil quia cupiditate debitis quisquam nemo, accusamus animi
                explicabo? Architecto, unde laboriosam?
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
