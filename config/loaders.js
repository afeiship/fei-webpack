(function () {

  var ExtractTextPlugin = require('extract-text-webpack-plugin');
  
  module.exports = [
    {
      test: /\.(js|jsx)$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader' // 'babel-loader' is also a legal name to reference
    },
    {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer-loader!sass-loader")
    },
    {
      test: /\.html$/,
      loader: 'html-loader'
    },
    {
      test: /\.(png|jpe?g|eot|svg|ttf|woff2?)$/,
      loader: "file-loader?name=[path][name].[hash].[ext]"
    }
  ];

}());
