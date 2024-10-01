import React from "react";
import { useNode } from "@craftjs/core";

export const DragText = ({ text, fontSize, color }) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <p
      ref={(ref) => connect(drag(ref))}
      style={{ fontSize: `${fontSize}px`, color }}
    >
      {text}
    </p>
  );
};

DragText.craft = {
  props: {
    text: "Editable text",
    fontSize: 16,
    color: "#000000",
  },
  rules: {
    canDrag: true,
  },
};
