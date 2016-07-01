(function () {


  var webpack = require('webpack');

  //Plugin list:
  var ExtractTextPlugin = require('extract-text-webpack-plugin');
  var HtmlWebpackPlugin = require('html-webpack-plugin');
  var PurifyCSSPlugin = require('purifycss-webpack-plugin');
  var ImageminPlugin = require('imagemin-webpack-plugin').default;

  module.exports = [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new ExtractTextPlugin('styles/[name]_[hash].css', {
      publicPath: '/styles/'
    }),
    new PurifyCSSPlugin({
      paths: [
        'index.html'
      ],
      purifyOptions: {
        minify: true,
        info: true
      }
    }),
    new HtmlWebpackPlugin({
      title: 'Fei Webpack App',
      template: 'index.html',
      filename: 'index.html',
      hash: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true
      }
    }),
    new ImageminPlugin({
      root: 'assets',
      disable: false,
      optipng: {
        optimizationLevel: 3
      },
      gifsicle: {
        optimizationLevel: 1
      },
      jpegtran: {
        progressive: false
      },
      svgo: {},
      pngquant: {
        quality: '95-100'
      }
    })
  ];

}());
