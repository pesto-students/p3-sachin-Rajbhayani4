import React from 'react'
import { Link } from "react-router-dom";

const Footer = () => {

    const footerVal = [
        {
            header: "Features",
            links: [{ name: "Link Shorting" }, { name: "Branded Links" }, { name: "Analytics" }]
        },
        {
            header: "Resources",
            links: [{ name: "Blog" }, { name: "Developers" }, { name: "Support" }]
        },
        {
            header: "Company",
            links: [{ name: "About" }, { name: "Our Team" }, { name: "Careers" }, { name: "Contact" }]
        },
    ];

    return (
        <div className="bg-black ">
            <footer className="container mx-auto text-center lg:text-left px-4 md:px-24 py-2">
                <div className="md:flex md:justify-between">
                    <h2 className="text-2xl font-bold text-gray-900 cursor-pointer"><Link to="/">Shortly</Link></h2>
                    <div className="md:flex">
                        {
                            footerVal?.map((mainCon, j) => {
                                return (
                                    <div key={j} className="text-white col-span-2 mx-2 cursor-pointer">
                                        <Link to="/" className="text-xl">{mainCon?.header}</Link>
                                        {
                                            mainCon?.links?.map((item, i) => {
                                                return (
                                                    <Link to="/" className="block" key={i}>{item?.name}</Link>
                                                )
                                            })
                                        }
                                    </div>)
                            })
                        }
                    </div>
                    <h2 className=" text-white text-xl cursor-pointer"><Link to="/">Login</Link> &nbsp; <Link to="/">Sign Up</Link></h2>

                </div>
            </footer>
        </div>
    )
}

export default Footer