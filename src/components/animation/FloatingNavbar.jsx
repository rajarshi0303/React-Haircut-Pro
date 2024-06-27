import React, { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
  delay,
} from "framer-motion";
import { NavLink } from "react-router-dom";

export const FloatingNavbar = ({ navItems }) => {
  const [isMobile, setIsMobile] = useState(false);

  function handleClick() {
    setIsMobile(!isMobile);
  }

  function handleActive({ isActive }) {
    return isActive ? "block py-2 text-orange-600" : "block py-2 text-gray-500";
  }

  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    console.log(current);
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious();

      if (direction < 0) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.nav
        initial={{
          opacity: 1,
          // Initial opacity set to 0 for fade-in effect
          // Initially transparent background
        }}
        animate={{
          opacity: visible ? 1 : 0,
          // Black color code with full opacity when visible, transparent otherwise
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="bg-gray-950 lg:bg-gray-950 fixed w-full top-0 z-10"
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="https://flowbite.com/"
            className="flex items-center rtl:space-x-reverse"
          >
            <svg
              className="w-11 text-orange-600"
              data-slot="icon"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M8.128 9.155a3.751 3.751 0 1 1 .713-1.321l1.136.656a.75.75 0 0 1 .222 1.104l-.006.007a.75.75 0 0 1-1.032.157 1.421 1.421 0 0 0-.113-.072l-.92-.531Zm-4.827-3.53a2.25 2.25 0 0 1 3.994 2.063.756.756 0 0 0-.122.23 2.25 2.25 0 0 1-3.872-2.293ZM13.348 8.272a5.073 5.073 0 0 0-3.428 3.57 5.08 5.08 0 0 0-.165 1.202 1.415 1.415 0 0 1-.707 1.201l-.96.554a3.751 3.751 0 1 0 .734 1.309l13.729-7.926a.75.75 0 0 0-.181-1.374l-.803-.215a5.25 5.25 0 0 0-2.894.05l-5.325 1.629Zm-9.223 7.03a2.25 2.25 0 1 0 2.25 3.897 2.25 2.25 0 0 0-2.25-3.897ZM12 12.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
              ></path>
              <path d="M16.372 12.615a.75.75 0 0 1 .75 0l5.43 3.135a.75.75 0 0 1-.182 1.374l-.802.215a5.25 5.25 0 0 1-2.894-.051l-5.147-1.574a.75.75 0 0 1-.156-1.367l3-1.732Z"></path>
            </svg>
            <span className="ml-2 self-center text-3xl tracking-wide font-bold whitespace-nowrap text-orange-600">
              HAIRCUT
            </span>
          </a>

          <button
            onClick={handleClick}
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-300 rounded-lg md:hidden "
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          <div
            className={`${
              isMobile ? "" : "hidden"
            } w-full mt-4 md:mt-0 md:block md:w-auto`}
            id="navbar-default"
          >
            <ul className="flex flex-col text-lg font-bold  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
              {navItems.map((navItem, index) => (
                <NavLink to={navItem.link} className={handleActive} key={index}>
                  {navItem.name}
                </NavLink>
              ))}
              <NavLink to="/appointment">
                <li className="font-medium block py-2 px-4 bg-orange-600 text-gray-100 rounded-sm hover:bg-orange-700 ">
                  Appointment
                </li>
              </NavLink>
            </ul>
          </div>
        </div>
      </motion.nav>
    </AnimatePresence>
  );
};
