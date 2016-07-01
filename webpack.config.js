(function () {

  'use strict';

  var path = require('path');
  var webpack = require('webpack');
  var defaultConfig = require('./config/defaults');
  var srcPath = defaultConfig.srcPath;

  //Plugin list:
  var ExtractTextPlugin = require('extract-text-webpack-plugin');
  var HtmlWebpackPlugin = require('html-webpack-plugin');


  module.exports = {
    context: srcPath,
    entry: [
      'webpack-dev-server/client?http://127.0.0.1:' + defaultConfig.port,
      'webpack/hot/only-dev-server',
      './scripts/main'
    ],
    output: {
      path: './dist/',
      filename: "scripts/[name]_[hash].js",
      chunkFilename: "scripts/[id]_[hash].js"
    },
    module: {
      loaders: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel-loader' // 'babel-loader' is also a legal name to reference
        },
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer-loader!sass-loader")
        }
      ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('development')
      }),
      new ExtractTextPlugin('styles/[name]_[hash].css', {
        publicPath: '/styles/'
      }),
      new HtmlWebpackPlugin({
        title: 'Fei Webpack App',
        filename: 'index.html'
      })
    ]
  };

}());
