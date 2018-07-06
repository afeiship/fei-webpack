import webpack from 'webpack';
import path from 'path';

export default ({ mode }) => {
  return {
    mode,
    entry:{
      vendors:[
        'jquery',
        'react',
        'react-dom'
      ]
    },
    output: {
      path: path.resolve(__dirname, '../dist/vendors'),
      filename: '[name].[hash].js',
      library: '[name]_library'
    },
    plugins: [
      new webpack.DllPlugin({
        path: path.resolve(__dirname, '../dist/vendors/manifest.json'),
        name: '[name]_library',
        context: __dirname,
      })
    ]
  }
};
