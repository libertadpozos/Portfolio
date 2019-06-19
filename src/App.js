import React from "react";
import "./App.scss";
import AboutMe from "./components/AboutME/AboutMe";
import Tools from "./components/Tools/Tools";
import Projects from "./components/Projetcs/Projects";

function App() {
  return (
    <div>
      <div className="info__container">
        <div className="photo"> </div>
        <h1 className="main-title">Libertad Pozos</h1>
        <p className="subtitle">Front-End Developer</p>
      </div>
      <AboutMe/>
      <Tools/>
    <Projects/>
     
    </div>
  );
}
export default App;
