import React from "react";
import { Frame, Element } from "@craftjs/core";
import { Container } from "./Container";

const DropCanvas = ({ viewMode }) => {
  const getCanvasStyle = () => {
    switch (viewMode) {
      case "mobile":
        return { width: "375px", height: "100%" };
      case "tablet":
        return { width: "768px", height: "100%" };
      case "desktop":
      default:
        return { width: "100%", height: "100%" };
    }
  };

  return (
    <div className="flex justify-center overflow-hidden  items-center h-[calc(100vh-4.5rem)] bg-gray-100">
      <div
        style={{
          ...getCanvasStyle(),
          transition: "width 0.3s, height 0.3s",
          overflow: "auto",
          border: viewMode !== "desktop" ? "1px solid #e5e7eb" : "none",
          borderRadius: viewMode !== "desktop" ? "8px" : "0",
          boxShadow:
            viewMode !== "desktop"
              ? "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
              : "none",
        }}
      >
        <Frame>
          <Element is={Container} canvas></Element>
        </Frame>
      </div>
    </div>
  );
};

export default DropCanvas;
