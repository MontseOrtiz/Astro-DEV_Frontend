import React from "react";
import { Route } from "react-router-dom";
import {RoverProvider} from "../Context/RoverContext"
import Home from '../Views/Home'
import RoverPhotos from '../Views/RoverPhotos'
import RoverInfoMenu from '../Views/RoverInfoMenu'
import RoverPhotosList from '../Views/RoverPhotosList'
import RoverInfo from '../Views/RoverInfo'

function  Routes () {
  return(
    <RoverProvider>
      <Route exact path="/" component={Home}/>
      <Route exact path="/rover-photo" component={RoverPhotos}/>
      <Route exact path="/rover-photo/:roverName" component={RoverPhotosList}/>
      <Route exact path="/rover-info" component={RoverInfoMenu}/>
      <Route exact path="/rover-info/:roverName" component={RoverInfo}/>
    </RoverProvider>
  )
};
  
  export default Routes;