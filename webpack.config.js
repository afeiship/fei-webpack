(function () {

  'use strict';

  var path = require('path');
  var webpack = require('webpack');
  var defaultConfig = require('./config/defaults');
  var srcPath = defaultConfig.srcPath;


  module.exports = {
    context: srcPath,
    entry: [
      'webpack-dev-server/client?http://127.0.0.1:' + defaultConfig.port,
      'webpack/hot/only-dev-server',
      './scripts/main'
    ],
    output: {
      publicPath: '/dist/',
      path: './dist/',
      filename: 'bundle.js'
    },
    module: {
      loaders: defaultConfig.moduleLoaders
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('development')
      })
    ]
  };

}());
