import React, { useState } from 'react';
import CopyToClipboard from "react-copy-to-clipboard";
import axios from 'axios';
import homeImg from "../img/homeImg.svg";

const Home = () => {

    const [userInput, setUserInput] = useState("");
    const [shortenedLink, setShortenedLink] = useState("");
    const [buttonAve, setButtonAve] = useState(true);

    const fetchData = async () => {
        try {
            setButtonAve(false);
            await axios.get(`https://api.shrtco.de/v2/shorten?url=${userInput}`)
                .then((response) => {
                    setShortenedLink(response?.data?.result?.full_short_link);
                }).catch((e) => {
                    console.log("Error:- ", e.message);
                    setButtonAve(true);
                })
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className="bg-gray-100">
            <div className="container mx-auto">
                <div className="grid grid-cols-12 gap-1">

                    <div className="col-span-12 md:col-start-2 md:col-span-7">
                        <h1 className="text-3xl md:text-5xl font-medium text-gray-900 mt-24 mb-16">
                            More than just shorter Links
                        </h1>
                        <p className="font-medium mb-20">Build your brand's recognition and get detailed insights on how links are performing</p>
                    </div>
                    <div className="hidden md:block col-span-3">
                        <img className='w-full mt-16' src={homeImg} />
                    </div>

                </div>

                <div className="mt-16 mx-auto w-full lg:w-9/12 py-4 px-4 md:px-12 shadow-lg rounded-md">
                    <input
                        className="w-full mb-3 lg:mb-0 lg:w-9/12 outline-none border-2 border-blue-500 rounded-md backdrop-blur-xl bg-white/20 shadow-md px-3 py-3"
                        type="text"
                        placeholder="Shorten a link here..."
                        defaultValue={userInput}
                        onChange={e => { setUserInput(e.target.value) }}
                    />
                    <button
                        className={`border-2  text-white px-8 py-3 lg:float-right rounded-2xl ${buttonAve ? 'border-violet-900 bg-cyan-500 ' : 'cursor-wait border-violet-300 bg-cyan-300'}`}
                        onClick={() => {
                            fetchData();
                        }}
                    >
                        Shorten It!
                    </button>
                </div>



                <div className="mx-auto mt-5 w-full lg:w-9/12 py-4 px-2 md:px-4 shadow-lg rounded-md">
                    <div className="md:flex md:justify-between border-2 p-2 border-gray-800">
                        <p className="mt-2">{userInput}</p>
                        <div>
                            <span className="text-cyan-500">{shortenedLink}</span>
                            <CopyToClipboard className="inline-block mr-0 border-2 bg-cyan-500 text-white font-medium px-5 py-2 ml-4 rounded-md" text={shortenedLink}>
                                <button onClick={() => setButtonAve(true)}>
                                    Copy
                                </button>
                            </CopyToClipboard>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Home;