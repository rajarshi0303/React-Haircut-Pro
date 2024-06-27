import * as React from "react";
import { useState } from "react";
import axios from "axios";

export default function AppointmentForm() {
  const [isDropDown, setIsDropDown] = useState(false);

  const [data, setDate] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    adult: 0,
    child: 0,
    services: {
      haircut: false,
      beardtrim: false,
      mansshave: false,
      hairdyeing: false,
      mustache: false,
      stacking: false,
    },
    message: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setDate((prevdata) => ({ ...prevdata, [name]: value }));
  }
  function handleServices(event) {
    const { name, checked } = event.target;
    console.log(checked);
    setDate((prevdata) => ({
      ...prevdata,
      services: { ...prevdata.services, [name]: checked },
    }));
  }
  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("http://localhost:3000/appointment", data)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div>
      <section className="h-full max-w-screen-xl px-4 mt-16 lg:mt-24 mx-auto lg:px-14 lg:flex">
        <div className=" flex flex-col justify-center w-full lg:order-2 lg:w-1/2">
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            title="map"
            marginHeight="0"
            marginWidth="0"
            scrolling="no"
            src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
        <div className="flex flex-col justify-center w-full pt-0 order-1 lg:w-1/2 bg-gray-900">
          <div className="w-full p-4  sm:p-12 bg-gray-900">
            <p className="mb-3 font-semibold text-lg text-orange-500">
              Book Your Appointment
            </p>

            <div className="flow-root">
              <form onSubmit={handleSubmit}>
                <div className="-mx-2 md:items-center md:flex">
                  <div className="flex-1 px-2">
                    <label className="block mb-2 text-sm text-gray-300">
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      value={data.name}
                      onChange={handleChange}
                      type="text"
                      className="block w-full px-5 py-3 mt-2 text-white bg-transparent border border-gray-500 rounded-md"
                    />
                  </div>

                  <div className="flex-1 px-2 mt-4 md:mt-0">
                    <label className="block mb-2 text-sm text-gray-300">
                      Email address
                    </label>
                    <input
                      id="email"
                      name="email"
                      value={data.email}
                      onChange={handleChange}
                      type="email"
                      className="block w-full px-5 py-3 mt-2 text-white bg-transparent border border-gray-500 rounded-md"
                    />
                  </div>
                </div>
                <div className="-mx-2 mt-4 md:items-center md:flex">
                  <div className="flex-1 px-2">
                    <label className="block mb-2 text-sm text-gray-300">
                      Date
                    </label>
                    <input
                      id="date"
                      name="date"
                      value={data.date}
                      onChange={handleChange}
                      type="date"
                      className="block w-full px-5 py-3 mt-2 text-white bg-transparent border border-gray-500 rounded-md"
                    />
                  </div>

                  <div className="flex-1 px-2 mt-4 md:mt-0">
                    <label className="block mb-2 text-sm text-gray-300">
                      Time
                    </label>
                    <input
                      id="time"
                      name="time"
                      value={data.time}
                      onChange={handleChange}
                      type="time"
                      className="block w-full px-5 py-3 mt-2 text-white bg-transparent border border-gray-500 rounded-md"
                    />
                  </div>
                </div>
                <div className="-mx-2 mt-4 md:items-center md:flex">
                  <div className="flex-1 px-2">
                    <label className="block mb-2 text-sm text-gray-300">
                      Select Adult
                    </label>
                    <select
                      name="adult"
                      id="adult"
                      value={data.adult}
                      onChange={handleChange}
                      className="block w-full px-5 py-3 mt-2 text-white bg-gray-900 border border-gray-500 rounded-md"
                    >
                      <option value="0"></option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                  </div>

                  <div className="flex-1 px-2 mt-4 md:mt-0">
                    <label className="block mb-2 text-sm text-gray-300">
                      Select Child
                    </label>
                    <select
                      name="child"
                      id="child"
                      value={data.child}
                      onChange={handleChange}
                      className="block w-full px-5 py-3 mt-2 text-white bg-gray-900 border border-gray-500 rounded-md"
                    >
                      <option value="0"></option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                  </div>
                </div>

                <div className="flex-1 mt-4 md:mt-4">
                  <label className="block mb-2 text-sm text-gray-300">
                    Select Services
                  </label>
                  <button
                    onClick={() => setIsDropDown(!isDropDown)}
                    id="dropdownCheckboxButton"
                    data-dropdown-toggle="dropdownDefaultCheckbox"
                    className="w-full px-5 py-3 text-white bg-gray-900 border border-gray-500 rounded-md  inline-flex items-center justify-between"
                    type="button"
                  >
                    Services
                    <svg
                      className="w-2.5 h-2.5 ms-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </button>

                  <div
                    id="dropdownDefaultCheckbox"
                    className={`${
                      isDropDown ? " " : "hidden"
                    } z-10 w-full bg-transparent divide-y divide-gray-100 rounded-lg shadow`}
                  >
                    <ul
                      className="grid grid-cols-2 lg:grid-cols-3 items-center p-3  text-lg text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdownCheckboxButton"
                    >
                      <li>
                        <div className="flex items-center">
                          <input
                            id="haircut"
                            name="haircut"
                            value={data.services.haircut}
                            onChange={handleServices}
                            type="checkbox"
                            className="w-4 h-4 text-white bg-transparent border-gray-300 rounded"
                          />
                          <label
                            htmlFor="checkbox-item-1"
                            className="ms-2 text-base text-white"
                          >
                            HairCut
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-center">
                          <input
                            id="beardtrim"
                            name="beardtrim"
                            value={data.services.beardtrim}
                            onChange={handleServices}
                            type="checkbox"
                            className="w-4 h-4 text-white bg-transparent border-gray-300 rounded"
                          />
                          <label
                            htmlFor="checkbox-item-2"
                            className="ms-2 text-base text-white"
                          >
                            Beard Trim
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-center">
                          <input
                            id="MansShave"
                            name="mansshave"
                            value={data.services.mansshave}
                            onChange={handleServices}
                            type="checkbox"
                            className="w-4 h-4 text-white bg-transparent border-gray-300 rounded"
                          />
                          <label
                            htmlFor="checkbox-item-1"
                            className="ms-2 text-base text-white"
                          >
                            Mans Shave
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-center">
                          <input
                            id="hairdyeing"
                            name="hairdyeing"
                            value={data.services.hairdyeing}
                            onChange={handleServices}
                            type="checkbox"
                            className="w-4 h-4 text-white bg-transparent border-gray-300 rounded"
                          />
                          <label
                            htmlFor="checkbox-item-2"
                            className="ms-2 text-base text-white"
                          >
                            Hair Dyeing
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-center">
                          <input
                            id="mustache"
                            name="mustache"
                            value={data.services.mustache}
                            onChange={handleServices}
                            type="checkbox"
                            className="w-4 h-4 text-white bg-transparent border-gray-300 rounded"
                          />
                          <label
                            htmlFor="checkbox-item-1"
                            className="ms-2 text-base text-white"
                          >
                            Mustache
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-center">
                          <input
                            id="stacking"
                            name="stacking"
                            value={data.services.stacking}
                            onChange={handleServices}
                            type="checkbox"
                            className="w-4 h-4 text-white bg-transparent border-gray-300 rounded"
                          />
                          <label
                            htmlFor="checkbox-item-2"
                            className="ms-2 text-base text-white"
                          >
                            Stacking
                          </label>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="w-full mt-4">
                  <label className="block mb-2 text-sm text-gray-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={data.message}
                    onChange={handleChange}
                    className="block w-full h-20 px-5 py-3 mt-2 text-white placeholder-gray-400 bg-transparent border border-gray-500 rounded-md md:h-28 "
                    placeholder="Message"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-orange-600 rounded-md hover:bg-orange-700"
                >
                  Book
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
