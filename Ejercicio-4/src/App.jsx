import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import './App.css'
import Main1 from "./components/Main1";
import Main2 from "./components/Main2";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main1/>} />
        <Route path="/Main2" element={<Main2/>}/>
        <Route path="/NavBar" element={<NavBar/>}/>
        <Route path="/Footer" element={<Footer/>}/>
      </Routes>
    </BrowserRouter>
  );

}

export default App;
