(function () {

  'use strict';

  const path = require('path');
  const srcPath = path.join(__dirname, '/../src');
  const bowerPath = path.join(__dirname, '/../bower_components');

  module.exports = {
    srcPath: srcPath,
    bowerPath: bowerPath,
    publicPath: '/assets/',
    port: 8080
  };

}());
