import React from "react";
import { useState, useEffect } from "react";
const Code = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    <div
      className={`bg-white transition-all duration-500 ease-in-out overflow-y-auto h-screen text-black ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="flex items-center justify-center">
        <span className="font-bold text-xl mt-4 text-gray-400 transition-all duration-300 ease-in-out">
          Code
        </span>
      </div>
    </div>
  );
};

export default Code;
