import React from 'react'

export default class CommentBox extends React.Component {

  render () {
    return <div>
      <p>评论人：</p>
      <input type="text" ref="name"/>
      <p>评论内容：</p>
      <textarea cols="30" rows="4" ref="content"></textarea><br/>
      <button value="发表评论" onClick={this.send}>发表评论</button>
    </div>
  }
  send=()=>{
    console.log('ok')
    var info={
      user:this.refs.name.value,    //  用 ref 简单点
      content:this.refs.content.value
    }
    var list = JSON.parse(localStorage.getItem('info') || '[]')
    list.unshift(info)
    localStorage.setItem('info',JSON.stringify(list))
    this.refs.name.value=this.refs.content.value=''
    this.props.reload()
  }
}