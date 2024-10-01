import React from "react";
import { useState, useEffect } from "react";
const Images = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    <div>
      <div
        className={`bg-white flex  justify-center transition-all duration-500 ease-in-out overflow-y-auto h-screen text-black ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <span className="font-bold text-center text-xl mt-4 text-gray-400 ">
          Images
        </span>
      </div>
    </div>
  );
};

export default Images;
