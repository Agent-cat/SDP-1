import React from "react";
import { Element, useEditor } from "@craftjs/core";
import { components } from "../Constants/Constants";
import { useState, useEffect } from "react";
const Components = () => {
  const { connectors } = useEditor();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    <div
      className={`bg-white p-4 transition-all duration-500 ease-in-out overflow-y-auto h-screen text-black ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <h2 className="text-2xl font-bold text-center mb-4">Components</h2>
      <div className="grid grid-cols-2 mt-10  gap-4">
        {components.map((item, index) => (
          <div
            key={index}
            ref={(ref) =>
              connectors.create(ref, <Element is={item.component} canvas />)
            }
            className="bg-gray-100 border border-gray-600  shadow-md flex items-center justify-center  font-[gilroy] font-bold  rounded-lg  hover:scale-110 transition-all duration-300 px-4 py-3 text-gray-600  cursor-move"
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Components;
