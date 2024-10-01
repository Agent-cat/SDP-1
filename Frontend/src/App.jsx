import React, { useState } from "react";
import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";
import RightAside from "./Components/RightAside";
import LandingPage from "./Pages/Landingpage";
import { Bot, BotMessageSquare } from "lucide-react";
import HomepageLoading from "./Pages/HomepageLoading";

const App = () => {
  const [isLandingPage, setIsLandingPage] = useState(true);
  const [isHomePage, setIsHomePage] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div>
      {isLandingPage ? (
        <LandingPage setIsLandingPage={setIsLandingPage} />
      ) : isHomePage ? (
        (setTimeout(() => {
          setIsHomePage(false);
        }, 3800),
        (<HomepageLoading />))
      ) : (
        <div className="flex overflow-hidden select-none">
          <Sidebar darkMode={darkMode} setIsHomePage={setIsHomePage} />
          <Navbar darkMode={darkMode} />
          <RightAside darkMode={darkMode} />
          <div className="fixed bottom-6 right-10">
            <button
              onClick={() => setIsChatOpen(!isChatOpen)}
              className="w-14 h-14 bg-gray-900 shadow-xl  opacity-90 rounded-full  flex items-center justify-center text-white transition-all duration-300  focus:outline-none"
            >
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
                  <path
                    d="M80 120 Q100 140, 120 120 Q100 130, 80 120"
                    fill="black"
                  />
                </g>
              </svg>
            </button>
          </div>
          {isChatOpen && (
            <div className="fixed bottom-24 right-6 w-80 h-96  bg-gray-900 opacity-90 rounded-lg shadow-xl transition-all duration-300 transform scale-100"></div>
          )}
        </div>
      )}
    </div>
  );
};

export default App;
