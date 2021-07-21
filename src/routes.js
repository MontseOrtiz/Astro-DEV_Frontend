import React from "react";
import { Route } from "react-router-dom";
import MyProvider from "./context";
import photoOfTheDay from './views/photo_of_the_day'
import PhotoByDay from './views/photo_by_date'


function  Routes () {
return(
  <MyProvider>
    <Route exact path="/" component={photoOfTheDay}/>
    <Route exact path="/date" component={PhotoByDay}/>
  </MyProvider>
)
};
  
  export default Routes;