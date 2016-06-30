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
    module: {
      loaders: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel-loader' // 'babel-loader' is also a legal name to reference
        }
      ]
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
