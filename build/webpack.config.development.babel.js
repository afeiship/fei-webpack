import path from 'path';
import webpack from 'webpack';

console.log('dev config!', __dirname);


export default (env) => {
  console.log(env);
  return {
    mode: 'development',
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
    plugins:[
      new webpack.DllReferencePlugin({
        context: __dirname,
        manifest: path.resolve(__dirname, '../dist/vendors/manifest.json')
      }),
    ]
  }
};
