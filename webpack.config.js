// webpack
//import webpack from 'webpack';
// path join
//import path from 'path';

// webpack
const webpack = require('webpack');
// path join
const path = require('path');

// export default
//export default {
module.exports = {
  // debug true
  debug: true,
  // eval
  devtool: 'cheap-module-eval-source-map',
  // we need info, so print
  noInfo: false,

  // this 3 files become ./dist/bundle.js
  // public path /
  entry: [
    // one direction connection, so client sub to server
    'eventsource-polyfill',
    // client reload true
    'webpack-hot-middleware/client?reload=true',
    // entry
    './src/index'
  ],
  // deploy to web or deply to server
  target: 'web',
  //
  output: {
    path: __dirname + '/dist',
    // public path serves file from webpack
    publicPath: '/',
    filename: 'bundle.js'
  },
  // it serves files not gen by webpack
  devServer: {
    contentBase: './src'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // no errors mean, if there is an error, you cannot even build
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      // all js, include ./src/*, use babel loaders
      {test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel']},
      // see css, use css, style loaders
      {test: /(\.css)$/, loaders: ['style', 'css']},
      // see eot, file loader
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
      //woff, prefix font, limit 5000
      {test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},
      // ttf, mimetype
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
      // svg
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
    ]
  }
};
