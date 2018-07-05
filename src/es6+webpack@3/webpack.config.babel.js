import { resolve } from 'path';

export default {
  entry: './src/lib/next-js-core2.js',
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'core2.js',
    library: "nx",
    libraryTarget: 'commonjs',
  }
};
