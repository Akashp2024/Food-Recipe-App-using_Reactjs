import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Mainpage from "./Components/Mainpage";
import Mealinfo from "./Components/Mealinfo";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Mainpage />}></Route>
        <Route path="/:mealid" element={<Mealinfo />}></Route>
      </Routes>
    </>
  );
}

export default App;
