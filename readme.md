# 统一用yarn 或 npm 来安装 package文件，防出错

## nrm
1. nrm  提供了淘宝镜像、 cnpm镜像等
2. npm i nrm -g
3. npm ls 查看所有镜像
4. nrm use npm // 切换成某镜像来使用npm

## yarn facebook提供  比npm 快
> `yarn add jquery` 安装jq

### npm包全局路径  
> `C:\Users\Administrator\AppData\Roaming\npm\node_modules`


## 一、 最简 webpack v3.6
 `webpack ./src/index.js  ./dist/bundle.js`   把 index.js 打包成  bundle.js   [居然出错了，跳过]

## 二、 配置文件 webpack.config.js

```
const path = require('path')
module.exports={
  entry:'./src/index.js',
  output:{
    path:path.join(__dirname,'dist'),
    filename:'bundle.js'
  }
}
```

## 三、 自动监听、刷新  webpack-dev-server
```
 package.json
 "scripts": {
    "dev": "webpack-dev-server"
    // webpack-dev-server --open --port 3000 --contentBase src --hot 
    // 自动打开浏览器,设置主页,局部更新，css不会刷新浏览器
  },
 "devDependencies": {
    "webpack-dev-server": "^2.9.7",
    "webpack": "^3.6.0"
  }
 npm run dev 代码都存在 http://localhost:8080/
 访问 http://localhost:8080/src/index.html
 <script src="/bundle.js"></script>   打包后的存到内存了。

```
## 4.html-webpack-plugin 把 html 放内存
```  
webpack.config.js
const htmlWebpackPlugin = require('html-webpack-plugin')
 plugins: [  // 引入的插件都要放到这里
    new htmlWebpackPlugin({   // 内存中的html
      template: path.join(__dirname, 'src/index.html'), // 本地文件
      filename: 'index.html' // 内存中的文件名
    })  // 使用后生成的 index.html会自动引入打包的 js,但js放html前了 , template文件不用手动引入js
  ],
```  
## 5. 引入less scss 加载图片
```
package.json
 style-loader css-loader 加载css
 less  less-loader  加载 less
 url-loader file-loader 加载 样式中的本地图片，加载.tff字体
```

## 6. babel 转换 es6的 class类等高级代码
```
  package.json
  "babel-core": "^6.26.3",
  "babel-loader": "^7.1.5",  // 最新是v8 出错
  "babel-plugin-transform-runtime": "^6.23.0",
  "babel-preset-env": "^1.7.0",
  "babel-preset-stage-0": "^6.24.1",

  .babelrc
  {
  "presets": ["env","stage-0"],   // 对应安装的包
  "plugins": ["transform-runtime"]
}
```
## 7.引入 vue   npm i vue
```
index.js 
import Vue from 'vue'
 var vm = new Vue({
  el:'#app',
  data:{
    msg:123
  }
})
```
## 8.引入 .vue 文件
```
  package.json
  "vue-loader": "^13.4.2",  【最新版出错】
  "vue-template-compiler": "^2.5.21",
```

## 9.1 打包一
> cmd: webpack 
 + 默认使用`webpack.config.js`进行打包，打包到 dist文件夹下

## 9.2 打包二
1.复制 `webpack.config.js` 为 webpack.build.config.js 
```
package.json 
 "scripts": {
    "build":"webpack --config webpack.build.config.js"
  },
```
2.给打包的图片添加文件夹
```
webpack.build.config.js 
 {test: /\.(jpg|jpeg)$/, use: 'url-loader?limit=160&name=image/[hash:8]-[name].[ext]'},
```
> &name=image/xxx 

3.删除打包的dist文件夹，打包时重新生成
```
package.json
npm i clean-webpack-plugin -D 

webpack.build.config.js 
new cleanWebpackPlugin(['dist'])
```
4.分离第三方包的代码（`vue、vueJs 、jq`），抽离到新的js文件
```
webpack.build.config.js
 entry:{                          
    app:path.join(__dirname,'/src/index'),
    vendors:['jquery']  // 填写要抽离的第三方包名称
  },
  
   new webpack.optimize.CommonsChunkPlugin({  //  第三方js分离
        name:'vendors', // 要抽离的第三方包名称
        filename:'js/vendors.js' // 抽离出来的第三方包打包成 vendors.js
      }),
      
```
5.压缩js 
```
 new webpack.optimize.UglifyJsPlugin({   //  js 压缩
      compress:{
        warnings:false // 去掉警告
      }
    }),
    new webpack.optimize.DedupePlugin({  // 设置为产品上线环境，进一步压缩js
      'process.env.NODE_ENV':'"production"'
    })
```
6.压缩html
```
 new htmlWebpackPlugin({   
      minify:{   // html 压缩
        collapseWhitespace:true, // 合并空格
        removeComments:true, // 移除注释
        removeAttributeQuotes:true // 移除属性上的双引号
      }
    }),
```    
7.分离引入的less文件，css文件
```
yarn add extract-text-webpack-plugin -D

https://www.npmjs.com/package/extract-text-webpack-plugin

const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        }),
         publicPath:'../'  // 样式文件里面的背景图片添加  ../前缀  这一行根据具体情况处理，其他是复制github的
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
  ]
}

```
8.压缩css
```
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
 new OptimizeCssAssetsPlugin() // 压缩css

```