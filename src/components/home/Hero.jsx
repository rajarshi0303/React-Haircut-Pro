import React from "react";

import { TypewriterEffect } from "../animation/TypewriterEffect";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero({ title, url }) {
  const words = title.split(" ").map((word, index) => {
    return {
      text: word,
      className:
        word === "awesom" || word === "affordable" ? "text-orange-500" : "", // Conditionally add className to the last word
    };
  });

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div>
      <header>
        <div
          ref={ref}
          className="relative h-[28rem] w-full mx-auto lg:h-screen bg-gray-950"
        >
          <motion.div
            className="h-screen bg-center bg-cover"
            style={{
              backgroundImage: `url(${url})`,
              backgroundPosition: "bottom",
              backgroundSize: "cover",
              y: backgroundY,
            }}
          ></motion.div>

          <div className="absolute inset-0 z-0 flex justify-center items-center w-full h-full bg-gray-950/50 ">
            <div className="justify-center text-start">
              <h1 className="text-3xl uppercase tracking-tight font-bold max-w-xs lg:max-w-2xl text-white lg:text-6xl">
                <TypewriterEffect words={words} className="text-xl" />
              </h1>
              <motion.div
                initial={{ opacity: 0, x: -300 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 3 }}
                viewport={{ once: true }}
                className="mt-4 flex items-center font-bold uppercase text-white lg:text-2xl"
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="3"
                    stroke="currentColor"
                    className="w-7 h-7 mr-3 text-orange-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </span>
                123 Street, New York, USA
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -300 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 3.4 }}
                viewport={{ once: true }}
                className="mt-4 flex items-center font-bold uppercase text-white lg:text-2xl"
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="3"
                    className="w-7 h-7 mr-3 text-orange-500"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </span>
                +012 345 67890
              </motion.div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full py-4 h-1/6 rounded-md bg-gradient-to-t from-gray-950"></div>
        </div>
      </header>
    </div>
  );
}
