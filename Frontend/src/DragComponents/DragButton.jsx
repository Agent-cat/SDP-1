import React from "react";
import { useNode } from "@craftjs/core";

export const DragButton = ({ text }) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <button
      ref={(ref) => connect(drag(ref))}
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
    >
      {text}
    </button>
  );
};

DragButton.craft = {
  props: {
    text: "Click me",
  },
  rules: {
    canDrag: true,
  },
};
