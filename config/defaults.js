(function () {

  'use strict';

  const path = require('path');
  const srcPath = path.join(__dirname, '/../src');

  module.exports = {
    srcPath: srcPath,
    publicPath: '/assets/',
    port: 8080,
    moduleLoaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader' // 'babel-loader' is also a legal name to reference
      }
    ]
  };

}());
