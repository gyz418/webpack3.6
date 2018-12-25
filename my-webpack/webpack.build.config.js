const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
// 删除dist文件夹
const cleanWebpackPlugin = require('clean-webpack-plugin')
// 第三方js分离
const webpack = require('webpack')
// 抽取 引入的css文件
const ExtractTextPlugin = require('extract-text-webpack-plugin')
// 压缩css
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
  // entry: './src/index.js',  // 方式一
  entry: {                           // 方式二
    app: path.join(__dirname, '/src/index'),
    vendors: ['jquery', 'vue', 'vue-router']  // 填写要抽离的第三方包名称
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'js/bundle.js',
  },
  plugins: [  // 引入的插件都要放到这里
    new htmlWebpackPlugin({   // 内存中的html
      template: path.join(__dirname, 'src/index.html'), // 本地文件
      filename: 'index.html', // 内存中的文件名
      minify: {   // html 压缩
        collapseWhitespace: true, // 合并空格
        removeComments: true, // 移除注释
        removeAttributeQuotes: true // 移除属性上的双引号
      }
    }),  // 使用后生成的 index.html会自动引入打包的 js,但js放html前了 , template文件不用手动引入js
    new cleanWebpackPlugin(['dist']), // 删除dist 文件夹
    new webpack.optimize.CommonsChunkPlugin({  //  第三方js分离
      name: 'vendors', // 要抽离的第三方包名称
      filename: 'js/vendors.js' // 抽离出来的第三方包打包成 vendors.js
    }),
    new webpack.optimize.UglifyJsPlugin({   //  js 压缩
      compress: {
        warnings: false // 去掉警告
      }
    }),
    new webpack.optimize.DedupePlugin({  // 设置为产品上线环境，进一步压缩js
      'process.env.NODE_ENV': '"production"'
    }),
    new ExtractTextPlugin('css/style.css'),  // 抽取的css  打包成 style.css
    new OptimizeCssAssetsPlugin() // 压缩css
  ],
  module: {  // 配置所有第三方模块加载器
    rules: [
      {
        test: /\.css$/, use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader',
          publicPath: '../'  // 样式文件里面的背景图片添加  ../前缀
        })
      },  // 抽取css 文件
      {
        test: /\.less$/, use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'less-loader'],
          publicPath: '../'  // 样式文件里面的背景图片添加  ../前缀
        })   // 抽取less 文件
      },
      // {test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']}
      // 注意文件名是 scss  插件是 sass   sass安装失败
      {test: /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader?limit=16000&name=image/[hash:8]-[name].[ext]'},  // 处理样式中的图片,给图片加了个文件夹 'image'
      // 小于limit 会打包成 base64图片  name=[hash:8]-[name].[ext] 保持文件名和后缀名一致，默认图片名进行编码了,图片添加了哈希值，取前8位
      {test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader'}, // 处理字体文件
      {test: /\.js$/, use: 'babel-loader', exclude: /node_modules/}, // 配置babel 转换 高级的es6， node——modules除外
      {test: /\.vue$/, use: 'vue-loader'}
    ]

  },
  resolve: {
    alias: {
      // 'vue$': 'vue/dist/vue.js'  // 修改vue被导入时候的包的正确路径，默认 webpack引入的路径文件不完整
    }
  }
}