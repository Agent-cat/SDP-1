import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronDown,
  Code,
  Smartphone,
  Tablet,
  Monitor,
  Menu,
  X,
} from "lucide-react";
import Navcode from "../Pages/Navcode";
import DropCanvas from "./DropCanvas";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [viewMode, setViewMode] = useState("desktop");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="w-full h-screen">
      <div className="flex-wrap flex flex-col">
        <header className="flex h-18 px-[2.1vw] items-center gap-[2vw] border-b border-gray-200 bg-white">
          {windowWidth <= 768 ? (
            <button onClick={toggleMobileMenu} className="p-2">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          ) : (
            <>
              <button className="mlg:flex items-center hidden sm:hidden justify-center rounded-xl hover:bg-gray-100 p-[0.5vw]">
                <ChevronLeft size={30} />
              </button>
              <button>
                <div className="sxl:flex hidden items-center justify-center gap-[1vw] rounded-xl hover:bg-gray-100 p-[1vw]">
                  <span>page: HomePage</span>
                  <ChevronDown size={18} />
                </div>
              </button>
            </>
          )}
          <button>
            <div className="relative">
              <span
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center  hover:scale-110 transition-all duration-300 justify-center gap-[1vw] rounded-xl hover:bg-gray-200 bg-gray-100 p-[0.5vw]"
              >
                <Code />
                <span>Code</span>
              </span>
              {isOpen && <Navcode setIsOpen={setIsOpen} />}
            </div>
          </button>
          {windowWidth > 768 && (
            <>
              <div className="h-full md:flex hidden w-px bg-gray-300"></div>
              <div className="md:flex hidden gap-x-[1.5vw] items-center justify-center">
                <div className="relative group">
                  <button
                    className={`hover:bg-gray-100 hover:scale-110 transition-all duration-300 rounded-xl p-[0.5vw] ${
                      viewMode === "mobile" ? "" : ""
                    }`}
                    onClick={() => setViewMode("mobile")}
                  >
                    <Smartphone
                      color={viewMode === "mobile" ? "blue" : "gray"}
                    />
                  </button>
                  <span className="absolute top-full right-[-30%] w-auto p-2 min-w-10 rounded-md shadow-md text-blue-600 bg-white text-xs font-bold transition-all duration-300 scale-0 group-hover:scale-95">
                    Mobile
                  </span>
                </div>
                <div className="relative group">
                  <button
                    className={`hover:bg-gray-100 hover:scale-110 transition-all duration-300 rounded-xl p-[0.5vw] ${
                      viewMode === "tablet" ? "" : ""
                    }`}
                    onClick={() => setViewMode("tablet")}
                  >
                    <Tablet color={viewMode === "tablet" ? "blue" : "gray"} />
                  </button>
                  <span className="absolute top-full right-[-30%] w-auto p-2 min-w-10 rounded-md shadow-md text-blue-600 bg-white text-xs font-bold transition-all duration-300 scale-0 group-hover:scale-95">
                    Tablet
                  </span>
                </div>
                <div className="relative group">
                  <button
                    className={`hover:bg-gray-100 hover:scale-110 transition-all duration-300 rounded-xl p-[0.5vw] ${
                      viewMode === "desktop" ? "" : ""
                    }`}
                    onClick={() => setViewMode("desktop")}
                  >
                    <Monitor color={viewMode === "desktop" ? "blue" : "gray"} />
                  </button>
                  <span className="absolute top-full right-[-30%] w-auto p-2 min-w-10 rounded-md shadow-md text-blue-600 bg-white text-xs font-bold transition-all duration-300 scale-0 group-hover:scale-95">
                    Desktop
                  </span>
                </div>
              </div>
              <div className="h-full md:flex hidden w-[1.5px] bg-gray-300"></div>
              <div className="lg:flex hidden items-center justify-center">
                <span>
                  <b>view</b> : 100%{" "}
                </span>
                <ChevronDown size={20} />
              </div>
              <div>
                <button className="sm:flex hidden sm:items-center justify-center rounded-xl w-[20vw] bg-gray-100 p-[1vw]">
                  <span>Collabration part </span>
                </button>
              </div>
            </>
          )}
        </header>
      </div>
      {isMobileMenuOpen && (
        <div className="fixed inset-y-0 right-0 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out translate-x-0">
          <div className="p-6 h-full flex flex-col bg-gradient-to-b from-blue-50 to-white">
            <button onClick={toggleMobileMenu} className="self-end mb-8">
              <X size={24} className="text-gray-600 hover:text-gray-800" />
            </button>
            <nav className="space-y-6">
              <a
                href="#"
                className="block text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-200"
              >
                Home
              </a>
              <a
                href="#"
                className="block text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-200"
              >
                About
              </a>
              <a
                href="#"
                className="block text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-200"
              >
                Services
              </a>
              <a
                href="#"
                className="block text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-200"
              >
                Contact
              </a>
            </nav>
            <div className="mt-auto">
              <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-200">
                Sign In
              </button>
            </div>
          </div>
        </div>
      )}
      <DropCanvas viewMode={viewMode} />
    </div>
  );
};

export default Navbar;
