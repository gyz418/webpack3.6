import React from 'react'
import CmtItem from './CommentItem.jsx'
import CmBox from './CommentBox.jsx'

export default class CommentList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      list: [
        {user: 'kang', content: '333'},
        {user: 'kang1', content: '333a'},
        {user: 'kang2', content: '333b'},
        {user: 'kang3', content: '333c'},
      ]
    }
  }

  componentWillMount () {
    this.getData()
  }

  render () {
    return <div>
      <h1>评论列表</h1>
      {/* 评论组件 */}
      <CmBox reload={this.getData}/>  {/* 点发表评论时，再调一次接口数据，当props传递*/}
      {/* 父组件存数据，渲染时引入子组件   key 要用{}*/}
      {this.state.list.map((val, key) => {
        /* 列表组件*/
        return <CmtItem key={key} {...val}/>
      })}

    </div>
  }

  getData = () => {
    var list = JSON.parse(localStorage.getItem('info') || '[]')
    console.log('重新调接口',list)
    this.setState({
      list
    })
  }
}