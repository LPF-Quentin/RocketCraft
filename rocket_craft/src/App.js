import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AllCraftKsp1 from "./pages/AllCraftKsp1";
import AllCraftKsp2 from "./pages/AllCraftKsp2";
import Error from "./pages/Error";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Home />} />
        <Route path="/ksp1" element={<AllCraftKsp1 />} />
        <Route path="/ksp2" element={<AllCraftKsp2 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
