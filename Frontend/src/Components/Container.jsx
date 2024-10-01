import React from "react";
import { useNode } from "@craftjs/core";
export const Container = ({ background = "gray", children }) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <div
      className="overflow-x-scroll "
      ref={(ref) => connect(drag(ref))}
      style={{ margin: "5px ", backgroundColor: background, height: "100%" }}
    >
      {children}
    </div>
  );
};
