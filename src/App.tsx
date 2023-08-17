import React from "react";
import MainPage from "./pages/MainPage";
import { Routes, Route } from "react-router-dom";
import DebatePage from "./pages/Debate/DebatePage";
import PicturePage from "./pages/Picture/PicturePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/debate" element={<DebatePage />} />
        <Route path="/picture" element={<PicturePage />} />
      </Routes>
    </>
  );
}

export default App;
