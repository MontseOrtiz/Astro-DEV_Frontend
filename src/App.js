import "./App.css";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Routes from "./routes";
import React from "react";

function App() {
  return (
    <Router>
      <div className='stars2'>
      <div className='stars'>
      <div className='twinkling'>
      <div className='clouds'>

      <Switch>
        <Routes />
      </Switch>
      </div>
      </div>
      </div>
      </div>
      
    </Router>
  );
}

export default App;