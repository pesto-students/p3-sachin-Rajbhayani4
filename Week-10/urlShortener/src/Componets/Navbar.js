import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    const links = [
        { name: 'Feratures', href: '/', },
        { name: 'Pricing', href: '/', },
        { name: 'Resoures', href: '/', },
        { name: 'Contact Us', href: '/contectUs', },
    ]

    return (
        <nav className="container mx-auto">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-24">

                <div className="flex items-center justify-between py-3 md:py-4 md:block">
                    <h2 className="text-2xl font-bold text-gray-900"><Link to="/">Shortly</Link></h2>
                    <div className="space-y-2 md:hidden sm:inline-block">
                        <Link
                            to="/"
                            className="text-blue-800 hover:text-indigo-200"
                        >
                            login
                        </Link>
                        <Link
                            to="/"
                            className="mx-2 text-blue-800 hover:text-indigo-200"
                        >
                            SignUp
                        </Link>
                    </div>
                    <div className="md:hidden">
                        <button
                            className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                            onClick={() => setNavbar(!navbar)}
                        >
                            {navbar ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6 text-blue-800"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6 text-blue-800"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </button>

                    </div>
                </div>

                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                            }`}
                    >
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            {
                                links?.map((iteam, i) => {
                                    return (
                                        <li key={i} className="text-blue-800 hover:text-indigo-200">
                                            <Link to={iteam?.href}>{iteam.name}</Link>
                                        </li>
                                    )

                                })
                            }


                        </ul>


                    </div>
                </div>
                <div className="hidden space-x-2 md:inline-block">
                    <Link
                        to="/"
                        className="text-blue-800 hover:text-indigo-200"
                    >
                        login
                    </Link>
                    <Link
                        to="/"
                        className="text-blue-800 hover:text-indigo-200"
                    >
                        SignUp
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar