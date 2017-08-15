/*
// express
import express from 'express';
// webpack
import webpack from 'webpack';
// path.join
import path from 'path';
// import webpack config
import config from '../webpack.config';
// open browser
import open from 'open';
// icon
import favicon from 'serve-favicon';
*/

const express = require('express');
const webpack = require('webpack');
const path = require('path');
const config = require('../webpack.config');
const open = require('open');
const favicon = require('serve-favicon');

/* eslint-disable no-console */

// port 3000
const port = 3000;
// express app
const app = express();
// webpack as object
const compiler = webpack(config);

// express uses
// require dev server
app.use(require('webpack-dev-middleware')(compiler, {
  // no info on console
  noInfo: true,
  // public path /
  publicPath: config.output.publicPath
}));

// webpack + hot reload
app.use(require('webpack-hot-middleware')(compiler));

// express uses
// fav icon use that path and become obj
app.use(favicon(path.join(__dirname, 'assets', 'public', 'favicon.ico')));

// server everything from index
// res send file, path join
app.get('*', function(req, res) {
  // res send file
  // we need full path
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

// listen to port
app.listen(port, function(err) {
  // error console
  if (err) {
    console.log(err);
  } else {
    // open the app
    open(`http://localhost:${port}`);
  }
});
