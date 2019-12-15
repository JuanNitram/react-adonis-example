import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../views/Home';
import Places from '../views/Places';
import About from '../views/About';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/places' component={Places}/>
      <Route path='/about' component={About}/>
    </Switch>
  </main>
);

export default Main;