import path from 'path';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

export default (env) => {
  return {
    mode: 'production',
    entry: ['./src/index.js'],
    devServer: {
      quiet: true,
      noInfo: true,
      hot: false,
      host: '0.0.0.0',
      clientLogLevel: 'none',
      stats: 'errors-only'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: [
            'babel-loader',
          ],
          exclude: /node_modules/
        }
      ]
    },
    plugins: [
      new BundleAnalyzerPlugin({
        analyzerMode: 'server',
        analyzerHost: '127.0.0.1',
        analyzerPort: 8889,
        reportFilename: 'report.html',
        defaultSizes: 'parsed',
        openAnalyzer: true,
        generateStatsFile: false,
        statsFilename: 'stats.json',
        excludeAssets: /sockjs/i,
        statsOptions: null,
        logLevel: 'info'
      })
    ]
  };
};
