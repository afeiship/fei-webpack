# webpack4-semver:


## install
```shell
npm install -D afeiship/semver-webpack-plugin
```

## usage:
```js
//development:
plugins: [
  new SemverWebpackPlugin({
    enabled: true,
    callback: function (inVersion) {
      return this.inc( inVersion, 'prerelease','alpha');
    }
  })
]

//production:
plugins: [
  new SemverWebapckPlugin({
    enabled: true,
    callback: function (inVersion) {
      return this.inc( inVersion, 'prerelease','alpha');
    }
  })
]
```
