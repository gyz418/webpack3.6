const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [  // 引入的插件都要放到这里
    new htmlWebpackPlugin({   // 内存中的html
      template: path.join(__dirname, 'src/index.html'), // 本地文件
      filename: 'index.html' // 内存中的文件名
    })  // 使用后生成的 index.html会自动引入打包的 js,但js放html前了 , template文件不用手动引入js
  ],
  module: {  // 配置所有第三方模块加载器
    rules: [
      {test: /\.css$/, use: ['style-loader', 'css-loader']}, // 重命名
      //{test: /\.css$/, use: ['style-loader', 'css-loader?modules']},  // 加载 .css,先从后面往前调用 css-loader -> style-loader
      // 最新版css-loader 使用 css 模块化报错，目前修改为 v0.28.7
      // 一般只对自己写的less 或 scss 启用 css 模块化
     {test: /\.less$/, use: ['style-loader', 'css-loader?modules&localIdentName=[name]-[local]-[hash:5]', 'less-loader']},
      // {test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']}
      // 注意文件名是 scss  插件是 sass   sass安装失败
      {test: /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader?limit=16000&name=[hash:8]-[name].[ext]'},  // 处理样式中的图片
      // 小于limit 会打包成 base64图片  name=[hash:8]-[name].[ext] 保持文件名和后缀名一致，默认图片名进行编码了,图片添加了哈希值，取前8位
      {test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader'}, // 处理字体文件
      {test: /\.jsx?$/, use: 'babel-loader', exclude: /node_modules/}, // 配置babel 转换 高级的es6， node——modules除外
      //\.jsx?\ 匹配 js 或 jsx
      {test: /\.vue$/, use: 'vue-loader'}
    ]

  },
  resolve: {
    alias: {
      // 'vue$': 'vue/dist/vue.js'  // 修改vue被导入时候的包的正确路径，默认 webpack引入的路径文件不完整
    }
  }
}