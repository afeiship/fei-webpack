# archiver-webpack-plugin


## install:
```shell
npm install afeiship/archiver-webpack-plugin --save-dev --registry=https://registry.npm.taobao.org
```


## usage:
```js
plugins:[
  new ArchiverWebapckPlugin({
    transform: function (inValue) {
      return 'admin/' + inValue;
    },
    output: function (inPath, inExt) {
      return inPath.replace('dist', 'dist/admin-' + version) + inExt;
    },
    formatOptions: {
      gzip: true,
      zlib: { level: 9 }
    }
  })
]
```
