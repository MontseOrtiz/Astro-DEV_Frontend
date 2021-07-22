import React from "react";
import './Home.css'
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="wrapper">
      <ul id="scene" className="scene">
        <li className="layer" data-depth="0.00"></li>
        <li className="layer btn-home btn-15" data-depth="0.30"><Link className='' to={'/photo-today'}>Inicio</Link></li>
        <li className="layer" data-depth="0.60"><a href="#1" className="moveUp">A</a></li>
        <li className="layer" data-depth="0.90"><a href="#2" className="moveDown">S</a></li>
        <li className="layer" data-depth="0.70"><a href="#3" className="moveUp">T</a></li>
        <li className="layer" data-depth="0.20"><a href="#4" className="moveDown">R</a></li>
        <li className="layer" data-depth="0.30"><a href="#5" className="moveUp">O</a></li>
        <li className="layer" data-depth="0.20"><a href="#6" className="moveDown">D</a></li>
        <li className="layer" data-depth="0.60"><a href="#7" className="moveUp">E</a></li>
        <li className="layer" data-depth="0.90"><a href="#8" className="moveDown">V</a></li>
      </ul>
    </div>
  );
}

export default Home;
