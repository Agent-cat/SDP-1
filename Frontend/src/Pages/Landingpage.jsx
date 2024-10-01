import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

const Landingpage = ({ setIsLandingPage }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState("");

  const handlePopup = (content) => {
    setPopupContent(content);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="min-h-screen select-none bg-white text-gray-800 overflow-x-hidden relative">
      <nav className="fixed top-0 left-0 right-0 p-5 flex justify-between items-center bg-white z-50 shadow-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 200 200"
          className="scale-150 hover:rotate-12 transition-all duration-300"
        >
          <g fill="white" stroke="black" strokeWidth="5">
            <path d="M50 160 Q100 200, 150 160 T190 160 L190 80 Q190 30, 150 30 Q120 0, 80 30 Q10 30, 10 80 L10 160 Z" />
            <path
              d="M50 160 Q70 140, 90 160 T130 160 Q150 140, 170 160 T190 160"
              fill="white"
            />
            <circle cx="70" cy="80" r="15" fill="black" />
            <circle cx="130" cy="80" r="15" fill="black" />
            <circle cx="55" cy="110" r="6" fill="pink" />
            <circle cx="145" cy="110" r="6" fill="pink" />
            <path d="M80 120 Q100 140, 120 120 Q100 130, 80 120" fill="black" />
          </g>
        </svg>
        <div className="flex  ">
          <button
            className="px-4 py-2 scale-125  text-sm font-[gilroy-medium] font-bold  bg-gray-800 text-white border border-gray-300 rounded-md "
            onClick={() => handlePopup("login")}
          >
            Log in
          </button>
          <div className=" w-[1px]  bg-gray-300 mx-6 "></div>
          <button
            className="px-4 py-2 scale-125  text-sm font-[gilroy-medium] font-bold text-gray-800 bg-white border border-gray-300 rounded-md"
            onClick={() => handlePopup("signup")}
          >
            Sign up
          </button>
        </div>
      </nav>

      <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden">
        <h1 className="text-7xl font-[gilroy-bold] md:text-8xl font-bold">
          The Freedom
          <br /> to Create<br></br> Your Own Website
        </h1>
        <p className="text-md font-[gilroy-medium] text-gray-500 mt-4">
          ( Bring your vision to life with the website builder that gives you
          the tools you need to succeed.)
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="200"
          height="200"
          viewBox="0 0 200 200"
          onClick={() => {
            setIsLandingPage(false);
          }}
          className="cursor-pointer md:hover:scale-110 hover:rotate-12 transition-all duration-300 "
        >
          <g fill="white" stroke="black" strokeWidth="4">
            <path d="M50 160 Q100 200, 150 160 T190 160 L190 80 Q190 30, 150 30 Q120 0, 80 30 Q10 30, 10 80 L10 160 Z" />
            <path
              d="M50 160 Q70 140, 90 160 T130 160 Q150 140, 170 160 T190 160"
              fill="white"
            />
            <circle cx="70" cy="80" r="15" fill="black" />
            <circle cx="130" cy="80" r="15" fill="black" />
            <circle cx="55" cy="110" r="6" fill="pink" />
            <circle cx="145" cy="110" r="6" fill="pink" />
            <path d="M80 120 Q100 140, 120 120 Q100 130, 80 120" fill="black" />
          </g>
        </svg>

        <h1 className=" translate-x-2 text-2xl font-[gilroy-bold] font-bold">
          click me
        </h1>

        <div className="absolute bottom-10 right-10 animate-pulse">
          <svg width="60" height="60" viewBox="0 0 100 100">
            <polygon
              points="50,10 61,35 90,35 65,55 75,80 50,65 25,80 35,55 10,35 39,35"
              fill="#FF69B4"
            />
          </svg>
        </div>
        <div className="absolute bottom-10 left-40 animate-pulse">
          <svg width="60" height="60" viewBox="0 0 100 100">
            <polygon
              points="50,10 61,35 90,35 65,55 75,80 50,65 25,80 35,55 10,35 39,35"
              fill="#FF69B4"
            />
          </svg>
        </div>

        <div className="absolute top-1/2 right-20 animate-spin">
          <svg width="40" height="40" viewBox="0 0 100 100">
            <rect
              x="20"
              y="20"
              width="60"
              height="60"
              fill="#4CAF50"
              transform="rotate(45 50 50)"
            />
            <circle cx="50" cy="50" r="20" fill="#FFF" />
          </svg>
        </div>
        <div className="absolute top-2/3 left-60 animate-spin">
          <svg width="40" height="40" viewBox="0 0 100 100">
            <rect
              x="20"
              y="20"
              width="60"
              height="60"
              fill="#4CAF50"
              transform="rotate(45 50 50)"
            />
            <circle cx="50" cy="50" r="20" fill="#FFF" />
          </svg>
        </div>
        <div className="absolute top-1/4 left-20 animate-ping">
          <svg width="30" height="30" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" fill="#1E90FF" />
          </svg>
        </div>
        <div className="absolute top-4/4 right-80 animate-ping">
          <svg width="30" height="30" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" fill="#1E90FF" />
          </svg>
        </div>

        <div className="absolute bottom-1/4 left-1/3 animate-bounce">
          <svg width="45" height="45" viewBox="0 0 100 100">
            <polygon points="50,0 100,100 0,100" fill="#dadada" />
          </svg>
        </div>

        <div className="absolute top-3/4 right-1/3 animate-pulse">
          <svg width="55" height="55" viewBox="0 0 100 100">
            <rect
              x="10"
              y="10"
              width="80"
              height="80"
              fill="#9370DB"
              rx="20"
              ry="20"
            />
          </svg>
        </div>

        <div className="absolute top-1/3 left-1/4 animate-bounce">
          <svg width="35" height="35" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#32CD32"
              strokeWidth="10"
            />
            <circle cx="50" cy="50" r="20" fill="#32CD32" />
          </svg>
        </div>

        <div className="absolute bottom-1/3 right-1/4 animate-bounce">
          <svg width="40" height="40" viewBox="0 0 100 100">
            <path d="M50 0 L100 50 L50 100 L0 50 Z" fill="#FFA500" />
          </svg>
        </div>
      </section>

      {showPopup && (
        <div
          className="fixed inset-0   bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={closePopup}
        >
          <div
            className="bg-white  rounded-lg  shadow-xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closePopup}
              className="absolute top-2  right-2 text-gray-500 hover:text-gray-700"
            >
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
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <h2 className="text-2xl font-bold mb-4">
              {popupContent === "login" ? <Login /> : <Signup />}
            </h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default Landingpage;
