import React from "react";

const HomepageLoading = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        viewBox="0 0 200 200"
        className="animate-[spin_1s_linear_infinite_alternate] scale-125 mb-4"
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
      <p className="text-2xl   font-bold text-gray-800 animate-bounce">
        Loading
      </p>
    </div>
  );
};

export default HomepageLoading;
