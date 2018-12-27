import React from 'react'

import itemStyle from "../css/commentItem.css"

console.log(itemStyle)
export default function CommentItem (props) {

  // 样式一
  /*
  const content = {color:'blue',margin:'10px 0'}

  return <div>
     {/!*行内样式要双括号，写成对象  在{}里面写样式对象, 默认是px单位可省略*!/}
    <h3 style={{color:'red',margin:'3px 0',paddingLeft:10}}>{props.name}</h3>
    <h5 style={content}>{props.content}</h5>
  </div>
  */

  /* 样式二*/
/*  const style = {  // 可以把这个对象独立成js文件再引入
    section: {border: '1px solid #ccc', marginBottom: 10},
    title: {color: 'red', margin: '3px 0', paddingLeft: 10},
    content: {color: 'blue', margin: '10px 0'}
  }

  return <div style={style.section}>
    <p style={style.title}>{props.name}</p>
    <p style={style.content}>{props.content}</p>
  </div>*/

  /* 样式三
  * 启用css module 防全局文件重名样式覆盖
  * webpack.config.js
  *
  * */

  return <div className={itemStyle.section}>
    <p className={itemStyle.title}>{props.name}</p>
    <p className={itemStyle.content}>{props.content}</p>
  </div>
}