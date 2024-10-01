import React, { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { AppearanceNavlinks } from "../Constants/Constants";
const Appearance = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className={`bg-white transition-all  duration-500 ease-in-out overflow-y-auto h-screen text-black ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="flex items-center justify-center">
        <span className="font-bold text-xl mt-4 text-gray-400 transition-all duration-300 ease-in-out">
          Appearance
        </span>
      </div>
      <div className="border-b border-gray-200 px-6 py-4 transition-all duration-300 ease-in-out">
        <button className="border border-gray-200 flex w-full items-center rounded-lg bg-gray-50 px-3 py-1.5 transition-all duration-300 ease-in-out hover:bg-gray-100">
          <span className="rounded-lg p-1 transition-all duration-300 ease-in-out">
            selected title
          </span>
        </button>
      </div>
      {AppearanceNavlinks.map((section, index) => (
        <details
          key={index}
          className="group transition-all duration-300 ease-in-out"
        >
          <summary className="flex cursor-pointer hover:translate-x-1 hover:text-blue-500    list-none items-center justify-between border-b border-gray-200 py-4 px-6 transition-all duration-300 ease-in-out">
            <span className="select-none font-semibold  capitalize">
              {section.title}
            </span>
            <span className="group-open:-rotate-180 transition-transform duration-300 ease-in-out -rotate-90">
              <ChevronDown size={16} />
            </span>
          </summary>
          <div className="border-b items-center justify-center flex flex-col gap-y-4 border-gray-200 px-6 py-4 transition-all duration-300 ease-in-out">
            {section.content}
          </div>
        </details>
      ))}
    </div>
  );
};

export default Appearance;
