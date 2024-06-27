import React from 'react'

export default function Pricing() {
    return (
        <div>
            <section className="h-full max-w-screen-xl px-6 lg:px-14 mt-16 lg:mt-24 mx-auto lg:flex">
                <div className="flex flex-col justify-center w-full pt-0 lg:w-1/2 bg-gray-900">
                    <div className="w-full p-4  sm:p-12 bg-gray-900">
                        <p className="mb-3 font-semibold text-lg text-orange-500">Price & Plan</p>
                        <div className="items-center mb-10">
                            <h5 className="text-3xl font-bold leading-none text-white">CHECK OUT OUR BARBER SERVICES AND PRICES</h5>
                        </div>
                        <div className="flow-root">
                            <ul role="list" className="divide-y divide-gray-300">
                                <li className="py-2">
                                    <div className="flex items-center">
                                        <div className="flex-1 min-w-0 tracking-tighter">
                                            <p className="font-medium truncate text-white">
                                                HAIRCUT
                                            </p>
                                        </div>
                                        <div className="inline-flex items-center text-base text-orange-500">
                                            $29.00
                                        </div>
                                    </div>
                                </li>
                                <li className="py-2">
                                    <div className="flex items-center">
                                        <div className="flex-1 min-w-0 tracking-tighter">
                                            <p className="font-medium truncate text-white">
                                                BEARD TRIM
                                            </p>
                                        </div>
                                        <div className="inline-flex items-center text-base text-orange-500">
                                            $35.00
                                        </div>
                                    </div>
                                </li>
                                <li className="py-2">
                                    <div className="flex items-center">
                                        <div className="flex-1 min-w-0 tracking-tighter">
                                            <p className="font-medium truncate text-white">
                                                MANS SHAVE
                                            </p>
                                        </div>
                                        <div className="inline-flex items-center text-base text-orange-500">
                                            $23.00
                                        </div>
                                    </div>
                                </li>
                                <li className="py-2">
                                    <div className="flex items-center">
                                        <div className="flex-1 min-w-0 tracking-tighter">
                                            <p className="font-medium truncate text-white">
                                                HAIR DYEING
                                            </p>
                                        </div>
                                        <div className="inline-flex items-center text-base text-orange-500">
                                            $19.00
                                        </div>
                                    </div>
                                </li>
                                <li className="py-2">
                                    <div className="flex items-center">
                                        <div className="flex-1 min-w-0 tracking-tighter">
                                            <p className="font-medium truncate text-white">
                                                MUSTACHE
                                            </p>
                                        </div>
                                        <div className="inline-flex items-center text-base text-orange-500">
                                            $15.00
                                        </div>
                                    </div>
                                </li>
                                <li className="py-2">
                                    <div className="flex items-center">
                                        <div className="flex-1 min-w-0 tracking-tighter">
                                            <p className="font-medium truncate text-white">
                                                STACKING
                                            </p>
                                        </div>
                                        <div className="inline-flex items-center text-base text-orange-500">
                                            $34.00
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col justify-center w-full lg:w-1/2">
                    <img className="w-ful h-full object-cover" src="/public/images/price.jpg" alt="" />
                </div>
            </section>
        </div>
    )
}
