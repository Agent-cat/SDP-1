import React from "react";
import { useNode } from "@craftjs/core";

export const DragContainer = ({ background, padding, children }) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <div
      ref={(ref) => connect(drag(ref))}
      style={{ background, padding: `${padding}px` }}
    >
      {children}
    </div>
  );
};

DragContainer.craft = {
  props: {
    background: "#f0f0f0",
    padding: 10,
  },
  rules: {
    canDrag: true,
  },
};
