import { useState } from "react";
import Home from "./pages/Home";
import ReadyPage from "./pages/ReadyPage";
import SignUp from "./pages/SignUp";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
