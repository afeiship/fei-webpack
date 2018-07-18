import path, { resolve } from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const extractAntd = new ExtractTextPlugin('antd/[name]-[hash].css');
const extractCss = new ExtractTextPlugin('styles/[name]-[hash].css');

export default (env) => {

  return {
    mode: 'development',
    entry: {
      'app': './src/index.js',
      'antd': 'antd/dist/antd.less'
    },
    output: {
      filename: '[name]-[hash:6].bundle.js',
      path: resolve(__dirname, '../dist'),
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: [
            'babel-loader',
          ],
          exclude: /node_modules/
        },
        {
          test: /\.css$/,
          use: extractCss.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'postcss-loader']
          })
        },
        {
          test: /\.less$/,
          use: extractAntd.extract({
            fallback: 'style-loader',
            use: [
              'css-loader',
              'postcss-loader',
              {
                loader: 'less-loader',
                options: {
                  javascriptEnabled: true
                }
              }
            ]
          })
        },
      ]
    },
    plugins: [
      extractAntd,
      extractCss,
      new HtmlWebpackPlugin({
        template: resolve(__dirname, `../src/index.ejs`)
      }),
    ]
  };

};
