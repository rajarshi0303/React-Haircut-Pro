import React from 'react'

export default function WorkingHours() {
    return (
        <div>
            <section className="h-full max-w-screen-xl mt-16 lg:mt-24 mx-auto px-4 lg:px-14 lg:flex">
                <div className="flex flex-col justify-center w-full lg:w-1/2">
                    <img className="w-ful h-full object-cover" src="/public/images/open.jpg" alt="" />
                </div>

                <div className="flex flex-col justify-center w-full pt-0 lg:w-1/2 bg-gray-900">
                    <div className="w-full p-4  sm:p-12 bg-gray-900">
                        <p className="mb-3 font-semibold text-lg text-orange-500">Working Hours</p>
                        <div className="items-center mb-10">
                            <h5 className="text-3xl font-bold leading-none text-white">PROFESSIONAL BARBERS ARE WAITING FOR YOU</h5>
                        </div>
                        <div className="flow-root">
                            <ul role="list" className="divide-y divide-gray-300">
                                <li className="py-2">
                                    <div className="flex items-center">
                                        <div className="flex-1 min-w-0 tracking-tighter">
                                            <p className="font-medium truncate text-white">
                                                MONDAY
                                            </p>
                                        </div>
                                        <div className="inline-flex tracking-tighter items-center text-base text-gray-300/60">
                                            09 AM - 09 PM
                                        </div>
                                    </div>
                                </li>
                                <li className="py-2">
                                    <div className="flex items-center">
                                        <div className="flex-1 min-w-0 tracking-tighter">
                                            <p className="font-medium truncate text-white">
                                                TUESDAY
                                            </p>
                                        </div>
                                        <div className="inline-flex tracking-tighter items-center text-base text-gray-300/60">
                                            09 AM - 09 PM
                                        </div>
                                    </div>
                                </li>
                                <li className="py-2">
                                    <div className="flex items-center">
                                        <div className="flex-1 min-w-0 tracking-tighter">
                                            <p className="font-medium truncate text-white">
                                                WEDNESDAY
                                            </p>
                                        </div>
                                        <div className="inline-flex tracking-tighter items-center text-base text-gray-300/60">
                                            09 AM - 09 PM
                                        </div>
                                    </div>
                                </li>
                                <li className="py-2">
                                    <div className="flex items-center">
                                        <div className="flex-1 min-w-0 tracking-tighter">
                                            <p className="font-medium truncate text-white">
                                                THURSDAY
                                            </p>
                                        </div>
                                        <div className="inline-flex tracking-tighter items-center text-base text-gray-300/60">
                                            09 AM - 09 PM
                                        </div>
                                    </div>
                                </li>
                                <li className="py-2">
                                    <div className="flex items-center">
                                        <div className="flex-1 min-w-0 tracking-tighter">
                                            <p className="font-medium truncate text-white">
                                                FRIDAY
                                            </p>
                                        </div>
                                        <div className="inline-flex tracking-tighter items-center text-base text-gray-300/60">
                                            09 AM - 09 PM
                                        </div>
                                    </div>
                                </li>
                                <li className="py-2">
                                    <div className="flex items-center">
                                        <div className="flex-1 min-w-0 tracking-tighter">
                                            <p className="font-medium truncate text-white">
                                                SAT / SUN
                                            </p>
                                        </div>
                                        <div className="inline-flex tracking-tighter items-center text-base text-orange-500">
                                            CLOSED
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
