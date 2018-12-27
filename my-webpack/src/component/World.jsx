/*
* 可以用js文件也可以用 jsx文件
* 使用jsx时  webpack.config.js 要 解析
* {test: /\.jsx?$/, use: 'babel-loader', exclude: /node_modules/},
*
* */
// 无状态组件  只渲染页面时用，只传参，少了生命周期，运行速度 会快一点
import React from 'react'

/**
 *
 * @param props
 * @returns {*}
 * @constructor
 */
function World (props) {
  return <div className="div">
    this is world {props.name}
  </div>
}

export default World