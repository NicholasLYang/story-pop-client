import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../scenes/Home/Homepage';
import CreateStory from '../scenes/CreateStory';
import Explore from '../scenes/Explore';


export default () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/create' exact render={props => <CreateStory {...props} />} />
        <Route path='/explore' exact render={props => <Explore {...props} />} />
      </Switch>
    </BrowserRouter>
  )

}
