import React from "react";
import { Route } from "react-router-dom";
import photoOfTheDay from './views/photo_of_the_day'


function  Routes () {

    <>
      <Route exact path="/" component={photoOfTheDay}/>
    </>
};
  
  export default Routes;