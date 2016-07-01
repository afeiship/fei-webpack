(function () {

  'use strict';

  const path = require('path');
  const srcPath = path.join(__dirname, '/../src');
  const bowerPath = path.join(__dirname, '/../bower_components');

  module.exports = {
    srcPath: srcPath,
    bowerPath: bowerPath,
    publicPath: '/assets/',
    port: 8080,
    moduleLoaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader' // 'babel-loader' is also a legal name to reference
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!autoprefixer-loader'
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader'
      }
    ]
  };

}());
