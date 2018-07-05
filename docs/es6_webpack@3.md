# babel es6 webpack:

## steps:
0. webpack的版本 < 4 ，因为4中并不支持这种写法 [ npm install -D webpack@3 ]
1. webpack.config.js 改名成 webpack.config.babel.js
2. 安装 babel-loader babel-core:
```shell
npm install -D babel-loader babel-core
```
3. package.json 中加入：[ 一定不能加 --config webpack.config.babel.js ], 这样不通的
```conf
"build": "webpack -p"
```

## example config file:
```js
import { resolve } from "path";

export default {
  entry: resolve(__dirname, 'src/lib/core.js'),
  output: {
    path: resolve(__dirname, 'dist')
  }
};
```


## .bablerc:
```json
{
  "presets": [
    "env"
  ]
}
```

## package.json
```json
"babel": "^6.23.0",
"babel-core": "^6.26.3",
"babel-preset-env": "^1.7.0",
```

## scripts:
```json
"scripts": {
  "clean": "rimraf dist",
  "prebuild": "npm run clean",
  "build": "webpack -p"
}
```
