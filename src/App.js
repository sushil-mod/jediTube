import React from "react";
import { Route, Routes } from "react-router-dom";
import MockMan from "mockman-js";
import "./App.css";
import Home from "./pages/home/Home";


function App() {
  
return (
    <Routes>
      <Route path="/mockman" element={<MockMan/>} />
      <Route path="/" element={<Home/>} />
    </Routes>
);
   

}

export default App;
