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
    incArgs: [ 'prepatch' ]
  })
]

//production:
plugins: [
  new SemverWebpackPlugin({
    enabled: true,
    incArgs: [ 'patch' ]
  })
]
```
