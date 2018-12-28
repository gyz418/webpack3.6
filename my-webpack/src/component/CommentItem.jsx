import React from 'react'

export default class CommentItem extends React.Component {

  render () {
    return <div style={{border:'1px solid #ccc',margin:'10px 0'}}>
      <p style={{margin:'10px 0'}}>用户：{this.props.user}</p>
      <p style={{margin:'10px 0'}}>内容：{this.props.content}</p>
    </div>
  }
}