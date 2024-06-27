import React from "react";

export default function FeaturedServices() {
  const svg = (
    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gray-800 text-white shadow-xl md:h-14 md:w-14 md:rounded-xl">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    </div>
  );

  return (
    <>
      <div className="hidden lg:flex flex-col items-center justify-center mt-16 lg:mt-24 ">
        <h2 className="mb-4 text-center text-xl font-bold tracking-tighter text-white uppercase md:mb-8 lg:text-4xl xl:mb-12">
          Featured Services
        </h2>
        <div className="flex justify-center flex-wrap">
          <div className="self-center relative flex-shrink-0">
            <img
              src="/public/images/about.jpg"
              alt=""
              className="max-w-xl rounded-full "
            />
            <div className="mx-auto max-w-screen-xl px-4 md:px-8">
              <div className="flex justify-between">
                <div className="absolute top-14 -right-52 flex gap-5 max-w-xs">
                  {svg}

                  <div>
                    <h3 className="mb-2 text-xl font-semibold text-white">
                      Haircut
                    </h3>
                    <p className="mb-2 text-gray-500 text-base">
                      Filler text is dummy text which has no meaning however
                      looks very similar to real text.
                    </p>
                  </div>
                </div>

                <div
                  className="absolute top-14 -left-52 flex gap-5 max-w-xs"
                  dir="rtl"
                >
                  {svg}
                  <div>
                    <h3 className="mb-2 text-white font-semibold text-xl">
                      Beard Trim
                    </h3>
                    <p className="mb-2 text-gray-500 text-base">
                      Filler text is dummy text which has no meaning however
                      looks very similar to real text.
                    </p>
                  </div>
                </div>

                <div className="absolute bottom-48 -right-72 flex gap-5 max-w-xs">
                  {svg}

                  <div>
                    <h3 className="mb-2 font-semibold text-white text-xl">
                      Mans Shave
                    </h3>
                    <p className="mb-2 text-gray-500 text-base">
                      Filler text is dummy text which has no meaning however
                      looks very similar to real text.
                    </p>
                  </div>
                </div>

                <div
                  className="absolute bottom-48 -left-72  flex gap-5 max-w-xs"
                  dir="rtl"
                >
                  {svg}
                  <div>
                    <h3 className="mb-2 text-white font-semibold text-xl">
                      Hair Dyeing
                    </h3>
                    <p className="mb-2 text-gray-500 text-base">
                      Filler text is dummy text which has no meaning however
                      looks very similar to real text.
                    </p>
                  </div>
                </div>

                <div className="absolute bottom-0 -right-52 flex gap-5 max-w-xs">
                  {svg}

                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-white md:text-xl">
                      Mustache
                    </h3>
                    <p className="mb-2 text-gray-500">
                      Filler text is dummy text which has no meaning however
                      looks very similar to real text.
                    </p>
                  </div>
                </div>

                <div
                  className="absolute bottom-0 -left-52  flex gap-5 max-w-xs"
                  dir="rtl"
                >
                  {svg}
                  <div>
                    <h3 className="mb-2 text-white font-semibold text-xl">
                      Stacking
                    </h3>
                    <p className="mb-2 text-gray-500 text-base">
                      Filler text is dummy text which has no meaning however
                      looks very similar to real text.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
