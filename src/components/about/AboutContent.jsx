import React from "react";
import { motion } from "framer-motion";

export default function AboutContent() {
  return (
    <div className="mt-16 lg:mt-24 mx-auto max-w-screen-xl">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mx-4 mb-10 md:mb-16"
      >
        <h2 className="mb-2 text-center uppercase text-xl tracking-tighter font-bold text-white md:mb-6 lg:text-4xl">
          About us
        </h2>
        <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
          This is a section of some simple filler text, also known as
          placeholder text. It shares some characteristics of a real written
          text but is random or otherwise generated.
        </p>
      </motion.div>
      <div className="container flex flex-col lg:flex-row lg:items-center">
        <div className="relative text-end w-full h-full lg:w-1/2">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="absolute w-fit h-fit left-0 -bottom-10  lg:left-28"
          >
            <div className="flex items-center justify-center w-full h-full bg-gray-800">
              <div className="p-5 lg:py-10 text-center">
                <h1 className="text-sm font-semibold text-white lg:text-3xl">
                  <span className="text-lg text-orange-500 lg:text-4xl">
                    25 YEARS
                  </span>
                  <br />
                  EXPERIENCE{" "}
                </h1>
              </div>
            </div>
          </motion.div>
          <div className="inline-flex justify-end">
            <img
              className="object-cover w-72 lg:w-96 lg:h-96 "
              src="/public/images/about.jpg"
              alt="glasses photo"
            />
          </div>
        </div>
        <div className="w-full mt-16 lg:mt-0 lg:w-1/2">
          <div className="relative">
            <a className="block w-full px-0 lg:px-6">
              <h5 className="mb-2 text-xl lg:text-3xl font-bold tracking-tight text-white">
                MORE THAN JUST A HAIRCUT LEARN MORE ABOUT US!
              </h5>
              <p className="mt-4 font-normal text-gray-400">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo magna dolore erat amet.
              </p>
              <p className="mt-2 font-normal text-gray-400">
                Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No
                stet est diam rebum amet diam ipsum. Clita clita labore, dolor
                duo nonumy clita sit at, sed sit sanctus dolor eos.
              </p>
              <div className="mt-4 flex gap-4">
                <div className="flex flex-col">
                  <h3 className="mb-2 text-lg font-bold text-white md:text-xl">
                    SINCE 1990
                  </h3>
                  <p className="mb-4 text-gray-400">
                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                    Aliqu diam amet diam et eos.
                  </p>
                </div>
                <div className="flex flex-col">
                  <h3 className="mb-2 text-lg font-bold text-white md:text-xl">
                    1000+ CLIENTS
                  </h3>
                  <p className="mb-4 text-gray-400">
                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                    Aliqu diam amet diam et eos.
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
