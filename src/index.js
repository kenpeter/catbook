// babel polyfill
import 'babel-polyfill';
// react
import React from 'react'; 
// render 
import { render } from 'react-dom'; 
// router, history from react router 
import { Router, browserHistory } from 'react-router';
// routes 
import routes from './routes';

// render
// router history, routes
// get element by app
render(  
 <Router history={browserHistory} routes={routes} />,
 document.getElementById('app')
);
