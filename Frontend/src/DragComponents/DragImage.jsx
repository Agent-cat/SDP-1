import React from "react";
import { useNode } from "@craftjs/core";

export const DragImage = ({ src, alt, width, height }) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <img
      ref={(ref) => connect(drag(ref))}
      src={src}
      alt={alt}
      style={{ width: `${width}px`, height: `${height}px` }}
    />
  );
};

DragImage.craft = {
  props: {
    src: "https://via.placeholder.com/150",
    alt: "Placeholder image",
    width: 150,
    height: 150,
  },
  rules: {
    canDrag: true,
  },
};
