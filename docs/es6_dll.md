## es6_dll
> Dll plugins with webpack.

### packages:
> npm install -D html-webpack-plugin add-asset-html-webpack-plugin 
```json
"add-asset-html-webpack-plugin": "^2.1.3",
"html-webpack-plugin": "^3.2.0",
```


### dll.config.js
```js
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

```


### webpack.config.js plugins:
```js
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
```
