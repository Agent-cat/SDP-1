import React from "react";
import { useNode } from "@craftjs/core";

export const DragInput = ({ placeholder, width }) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <input
      ref={(ref) => connect(drag(ref))}
      type="text"
      placeholder={placeholder}
      className="border rounded px-2 py-1"
      style={{ width: `${width}px` }}
    />
  );
};

DragInput.craft = {
  props: {
    placeholder: "Enter text...",
    width: 200,
  },
  rules: {
    canDrag: true,
  },
};
