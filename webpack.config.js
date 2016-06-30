(function () {

  'use strict';

  var path = require('path');
  var webpack = require('webpack');
  var baseConfig = require('./config/base');


  module.exports = {
    context: path.join(__dirname, './src'),
    entry: [
      'webpack-dev-server/client?http://127.0.0.1:' + baseConfig.devServerPort,
      'webpack/hot/only-dev-server',
      './scripts/main'
    ],
    output: {
      publicPath: '/dist/',
      path: './dist/',
      filename: 'bundle.js'
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
