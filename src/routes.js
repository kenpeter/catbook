// react
import React from 'react';
// route, index
// from react router
import { Route, IndexRoute } from 'react-router';
// app component
import App from './components/App';
// home page component
import HomePage from './components/home/HomePage';
// cats component
import CatsPage from './components/cats/CatsPage';
// cat component
import CatPage from './components/cats/CatPage';

// home page, then App
// app has 2 routes, / or /cats
export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/cats" component={CatsPage} />
  </Route>
);
