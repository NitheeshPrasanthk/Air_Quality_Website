import React, { useEffect, useState } from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import AirQualityPage from "./pages/AirQualityPage";
import blogs from "./pages/blogs";
import { BrowserRouter } from "react-router-dom";
import { Routes,Route } from "react-router-dom";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="main">
      <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path='/' Component={HomePage}></Route>
      <Route path='/checkairquality' Component={AirQualityPage}></Route>
      <Route path='/blogs' Component={blogs}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
