import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header({ url, current, next }) {
    return (
        <div>
            <div className="w-full bg-center bg-cover h-64 lg:h-96" style={{ backgroundImage: `url(${url})` }}>
                <div className="flex items-center justify-center w-full h-full bg-gray-950/80">
                    <div className="text-center mt-24">
                        <h1 className="text-3xl font-semibold capitalize text-white lg:text-5xl">{current}</h1>
                        <div className="flex items-center py-4 overflow-x-auto whitespace-nowrap">
                            <NavLink to="/">
                                <span className="text-white text-lg">
                                    Home
                                </span>
                            </NavLink>
                            <span className="mx-2 text-gray-500 dark:text-gray-300">
                                /
                            </span>
                            <span className="capitalize text-orange-500 text-lg">
                                {current}
                            </span>
                            <span className="mx-2 text-gray-500 dark:text-gray-300">
                                /
                            </span>
                            <NavLink to={`/${next}`}>
                                <span className="text-white text-lg capitalize">
                                    {next}
                                </span>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
