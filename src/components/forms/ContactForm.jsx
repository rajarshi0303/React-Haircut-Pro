import React from "react";
import { useState } from "react";
import axios from "axios";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevdata) => ({ ...prevdata, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("http://localhost:3000/contact", formData)
      .then((response) => {
        console.log(response);
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
              Contact Us
            </p>
            <div className="items-center mb-10">
              <h5 className="text-3xl font-bold leading-none text-white">
                HAVE ANY QUERY? PLEASE CONTACT US!
              </h5>
              <p className="max-w-md mt-4 text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Perferendis, minus tempora nemo quos
              </p>
            </div>
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
                      value={formData.name}
                      onChange={handleChange}
                      type="text"
                      className="block w-full px-5 py-3 mt-2 text-white placeholder-gray-400 bg-transparent border border-gray-500 rounded-md"
                    />
                  </div>

                  <div className="flex-1 px-2 mt-4 md:mt-0">
                    <label className="block mb-2 text-sm text-gray-300">
                      Email address
                    </label>
                    <input
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      type="email"
                      className="block w-full px-5 py-3 mt-2 text-white placeholder-gray-400 bg-transparent border border-gray-500 rounded-md"
                    />
                  </div>
                </div>
                <div className="flex-1 mt-4 md:mt-4">
                  <label className="block mb-2 text-sm text-gray-300">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    type="text"
                    className="block w-full px-5 py-3 mt-2 text-white placeholder-gray-400 bg-transparent border border-gray-500 rounded-md"
                  />
                </div>
                <div className="w-full mt-4">
                  <label className="block mb-2 text-sm text-gray-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="block w-full h-20 px-5 py-3 mt-2 text-white placeholder-gray-400 bg-transparent border border-gray-500 rounded-md md:h-28 "
                    placeholder="Message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-orange-600 rounded-md hover:bg-orange-700"
                >
                  get in touch
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
