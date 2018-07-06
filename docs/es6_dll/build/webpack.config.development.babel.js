import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import AddAssetHtmlPlugin from 'add-asset-html-webpack-plugin';

export default (env) => {
  return {
    mode: env.mode,
    entry: ['./src/index'],
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [
            'babel-loader',
          ]
        }
      ]
    },
    plugins: [
      new webpack.DllReferencePlugin({
        context: __dirname,
        manifest: path.resolve(__dirname, '../dist/vendors/manifest.json')
      }),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, '../src/index.ejs'),
      }),
      new AddAssetHtmlPlugin({
        includeSourcemap: false,
        filepath: path.resolve(__dirname, '../dist/vendors/vendors.*.js')
      }),
    ]
  }
};
