import React from "react";
import { Route } from "react-router-dom";
import MyProvider from "./Context/context-Apod";
import photoOfTheDay from './Views/Photo-of-the-day/photo_of_the_day'
import PhotoByDay from './Views/Photo-by-day/photo_by_date'


function  Routes () {
return(
  <MyProvider>
    <Route exact path="/" component={photoOfTheDay}/>
    <Route exact path="/date" component={PhotoByDay}/>
  </MyProvider>
)
};
  
  export default Routes;