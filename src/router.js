import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import photoOfTheDay from './views/photo_of_the_day'


const Router = () => (
    <BrowserRouter>
      <Switch>
      <Route exact path="/" component={photoOfTheDay}/>
      </Switch>
    </BrowserRouter>
  );
  
  export default Router;