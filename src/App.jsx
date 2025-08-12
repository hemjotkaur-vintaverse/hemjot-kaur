// import { useEffect, useRef } from "react";
import "./App.css";
import Home from "./Components/Home";
import Convo from "./Components/Convo";
import { Routes, Route } from 'react-router-dom'
import Integration from "./Components/Integration";
import DocsHero from "./Components/DocsHero";
import Docs from "./Components/Docs";

function App() {
  return(
    <>
       <Routes>
        <Route path="/home" element={<Home/>} />   
        <Route path="/convo" element={<Convo/>} />   
        <Route path="/integration" element={<Integration/>} />   
        <Route path="/docs" element={<Docs/>} />   
      </Routes>
    </>
  )
}

export default App;
