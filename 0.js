
/*
* nrm  提供了淘宝镜像、 cnpm镜像等
* npm i nrm -g
* npm ls 查看所有镜像
* nrm use npm // 切换成某镜像来使用npm
* */

// npm包全局路径  C:\Users\Administrator\AppData\Roaming\npm\node_modules

/*
*
* webpack v3.6
*
* */
// 1. 最简 webpack
// webpack ./src/index.js  ./dist/bundle.js   把 index.js 打包成  bundle.js   [居然出错了，跳过]

// 2. 配置文件 webpack  webpack.config.js 【成功】

/*
const path = require('path')
module.exports={
  entry:'./src/index.js',
  output:{
    path:path.join(__dirname,'dist'),
    filename:'bundle.js'
  }
}*/

// 3 自动监听、刷新  webpack-dev-server
/*
* package.json
* "scripts": {
    "dev": "webpack-dev-server"
    // webpack-dev-server --open --port 3000 --contentBase src --hot 自动打开浏览器,设置主页,局部更新，css不会刷新浏览器
  },
* "devDependencies": {
    "webpack-dev-server": "^2.9.7",
    "webpack": "^3.6.0"
  }
* npm run dev 代码都存在 http://localhost:8080/
* 访问 http://localhost:8080/src/index.html
* <script src="/bundle.js"></script>   打包后的存到内存了。
* */

/*
* 4. html-webpack-plugin  把 html 放内存
* style-loader css-loader 加载css
* less  less-loader  加载 less
* url-loader file-loader 加载 样式中的本地图片，加载.tff字体
*
* */

/*
* 5.babel 转换 es6的 class类等高级代码
*
*  "babel-core": "^6.26.3",
    "babel-loader": "^7.1.5",  // 最新是v8 出错
    "babel-plugin-transform-runtime": "^6.23.0",
    "babel-preset-env": "^1.7.0",
    "babel-preset-stage-0": "^6.24.1",

  .babelrc
  {
  "presets": ["env","stage-0"],   // 对应安装的包
  "plugins": ["transform-runtime"]
}

* */

/*
* 6.引入 vue   npm i vue
* import Vue from 'vue'
* var vm = new Vue({
  el:'#app',
  data:{
    msg:123
  }
})
*
* */

/*
*
* 7 引入 .vue 文件
*  "vue-loader": "^13.4.2",  【最新版出错】
    "vue-template-compiler": "^2.5.21",
*
* */

/* 打包 直接 webpack*/