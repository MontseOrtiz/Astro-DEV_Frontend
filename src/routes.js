import React from "react";
import { Route } from "react-router-dom";
import MyProvider from "./Context/context-Apod";
import photoOfTheDay from './Views/Photo-of-the-day/photo_of_the_day'
import PhotoByDay from './Views/Photo-by-day/photo_by_date'
import {RoverProvider} from "./Context/RoverContext"
import Home from './Views/Home'
import RoverPhotos from './Views/RoverPhotos'
import RoverInfoMenu from './Views/RoverInfoMenu'
import RoverPhotosList from './Views/RoverPhotosList'
import RoverInfo from './Views/RoverInfo'

function  Routes () {
return(
  <>
  <MyProvider>
    <Route exact path="/photo-today" component={photoOfTheDay}/>
    <Route exact  path="/date" component={PhotoByDay}/>
  </MyProvider>
  <RoverProvider>
  <Route exact path="/" component={Home}/>
  <Route exact path="/rover-photo" component={RoverPhotos}/>
  <Route exact path="/rover-photo/:roverName" component={RoverPhotosList}/>
  <Route exact path="/rover-info" component={RoverInfoMenu}/>
  <Route exact path="/rover-info/:roverName" component={RoverInfo}/>
</RoverProvider>
</>
)
}
  export default Routes;