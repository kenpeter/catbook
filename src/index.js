// What exactly is index.js
// It is entry point.
// Why entry point, because it imports routes.js
// routes.js basically has all the routes matching components
// routes.js will be inserted into <Router>
//
// render takes:
// * router (contains routes.js and browser history)
// * #app in index.html (it tells which html element to embed the app)
//
// Basically, it loads index.html -> index.js -> app with routes

// What is babel polyfill?
// It allows you to use full feature of ES6
import 'babel-polyfill';
// react
import React from 'react';
// render
// react dom is the middle man connects to react and dom
import { render } from 'react-dom';

//
import configureStore from './store/configureStore';

//
import { Provider } from 'react-redux';

// router, history from react router
import { Router, browserHistory } from 'react-router';
// routes
import routes from './routes';

// what exactly is render?
//
render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>  
  document.getElementById('app')
);
