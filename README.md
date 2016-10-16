# vue2-demo

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

中文文档：
http://vuefe.cn/guide/


## 坑：

1. 在引入饿了么组件时，需在依赖css-loader、style-loader，并配置webpack

```
loaders: [
      {
        test: /\.css$/,
        loaders: ['style','css'],
        include: /node_modules/
      }
    ]
```

2.