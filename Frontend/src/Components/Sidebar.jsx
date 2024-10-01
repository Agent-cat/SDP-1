import React from "react";
import img from "../assets/download.jpeg";
import { NavLink } from "react-router-dom";
import { Settings } from "lucide-react";
import { SidebarNavlinks } from "../Constants/Constants";

const Sidebar = ({ setIsHomePage }) => {
  return (
    <aside className="min-w-18 h-screen flex flex-col justify-between  border-r items-center border-gray-200 bg-white ">
      <div className=" flex font-bold h-18 w-full items-center justify-center border-b border-gray-200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 200 200"
          onClick={() => {
            setIsHomePage(true);
          }}
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
      </div>
      <nav className="flex flex-1 flex-col gap-y-4 py-10">
        {SidebarNavlinks.map((item, index) => {
          return (
            <div key={index} className="group relative">
              <NavLink
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "rounded-xl  hover:scale-125 transition-all duration-300 items-center flex   justify-center p-2 text-gray-400 hover:bg-gray-50 "
                      : "rounded-xl  hover:scale-125 transition-all duration-300 items-center flex justify-center p-2 text-blue-600  hover:bg-gray-50"
                  }`
                }
                to={item.to}
              >
                {item.Icon}
              </NavLink>
              <span
                className="absolute left-full  ml-2 bottom-3 w-auto p-2 min-w-10 rounded-md shadow-md
            text-blue-600 bg-white text-xs font-bold 
            transition-all duration-300 scale-0 origin-left group-hover:scale-95"
              >
                {item.tooltip}
              </span>
            </div>
          );
        })}
      </nav>
      <div className=" flex flex-col items-center gap-y-4 py-10">
        <div className="group relative">
          <NavLink
            className={({ isActive }) =>
              `${
                isActive
                  ? "rounded-xl  hover:scale-125 transition-all duration-300 items-center flex   justify-center p-2 text-gray-400 hover:bg-gray-50 "
                  : "rounded-xl  hover:scale-125 transition-all duration-300 items-center flex justify-center p-2 text-blue-600  hover:bg-gray-50"
              }`
            }
            to="/settings"
          >
            <Settings />
          </NavLink>
          <span
            className="absolute left-full ml-2 bottom-3 w-auto p-2 min-w-10 rounded-md shadow-md
            text-blue-600 bg-white text-xs font-bold 
            transition-all duration-300 scale-0 origin-left group-hover:scale-110"
          >
            Settings
          </span>
        </div>
        <img className="rounded-full size-12 " src={img} alt="one" />
      </div>
    </aside>
  );
};

export default Sidebar;
