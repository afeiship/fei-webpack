import path from 'path';
import SemverWebpackPlugin from 'semver-webpack-plugin';

export default (env) => {
  return {
    mode: 'production',
    entry: path.resolve(__dirname, '../package.json'),
    devServer: {
      quiet: true,
      noInfo: true,
      hot: false,
      host: '0.0.0.0',
      clientLogLevel: 'none',
      stats: 'errors-only'
    },
    plugins: [
      new SemverWebpackPlugin({
        files: [path.resolve(__dirname, '../package.json')],
        incArgs: ['patch']
      })
    ]
  };
};
