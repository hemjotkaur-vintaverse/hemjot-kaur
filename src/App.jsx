// import { useEffect, useRef } from "react";
import "./App.css";
import Home from "./Components/Home";
import Convo from "./Components/Convo";
import { Routes, Route } from 'react-router-dom'
import Integration from "./Components/Integration";

function App() {
  return(
    <>
       <Routes>
        <Route path="/home" element={<Home/>} />   
        <Route path="/convo" element={<Convo/>} />   
        <Route path="/integration" element={<Integration/>} />   
      </Routes>
    </>
  )
}

export default App;
