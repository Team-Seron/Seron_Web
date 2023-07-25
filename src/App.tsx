import React from "react";
import MainPage from "./components/MainPage/MainPage";
import { Routes, Route } from "react-router-dom";
import DebatePage from "./components/DebatePage/DebatePage";
import PicturePage from "./components/PicturePage/PicturePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/debate" element={<DebatePage />} />
      <Route path="/picture" element={<PicturePage />} />
    </Routes>
  );
}

export default App;
