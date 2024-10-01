import React from "react";
import { Route, Routes } from "react-router-dom";
import Appearance from "../Pages/Appearance";
import Components from "../Pages/Components";
import Create from "../Pages/Create";
import Images from "../Pages/Images";
import Settings from "../Pages/Settings";
import Code from "../Pages/Code";
const RightRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/appearance" element={<Appearance />} />
        <Route path="/components" element={<Components />} />
        <Route path="/create" element={<Create />} />
        <Route path="/images" element={<Images />} />
        <Route path="/images" element={<Images />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/code" element={<Code />} />
      </Routes>
    </div>
  );
};

export default RightRoutes;
