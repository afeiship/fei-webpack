# webpack-shell-plugin:

## install
```shell
ni-d webpack-shell-plugin
```

## usage:
```js
plugins:[
    new WebpackShellPlugin({
      onBuildEnd: [
        'tar zcf dist/dist.tar.gz dist'
      ]
    })
]
```
