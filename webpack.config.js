(function () {

  'use strict';

  var path = require('path');
  var webpack = require('webpack');
  var defaultConfig = require('./config/defaults');
  var srcPath = defaultConfig.srcPath;
  var loaders=require('./config/loaders');
  var plugins=require('./config/plugins');

  //Main config:
  module.exports = {
    context: srcPath,
    entry: [
      'webpack-dev-server/client?http://localhost:' + defaultConfig.port,
      'webpack/hot/only-dev-server',
      './scripts/main'
    ],
    output: {
      path: './dist/',
      filename: "scripts/[name]_[hash].js",
      chunkFilename: "scripts/[id]_[hash].js"
    },
    module: {
      loaders: loaders
    },
    plugins: plugins
  };

}());
