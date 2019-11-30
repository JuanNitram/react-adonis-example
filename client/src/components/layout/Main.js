import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../views/Home';
import Products from '../views/Products';
import About from '../views/About';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/products' component={Products}/>
      <Route path='/about' component={About}/>
    </Switch>
  </main>
);

export default Main;