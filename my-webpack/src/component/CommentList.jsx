import React from 'react'
import CommentItem from './CommentItem.jsx'

export default class CommentList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {    //  当前组件的私有数据  类似 vue 的 data(){   }
      list: [
        {name: 'kang', content: 'haha'},
        {name: 'kang1', content: 'haha1'},
        {name: 'kang2', content: 'haha2'},
        {name: 'kang3', content: 'haha3'},
        {name: 'kang4', content: 'haha4'},
      ]
    }
  }

  render () {
    /*  方法一 在 render()里面，在return 前写js
        var arr = []
        this.state.list.forEach((val,key)=>{
          arr.push(val.name)
        })
        return <div>{arr}</div>
        */


    {/*方法二 map 利用它的返回值   forEach要找个数组装进去，才能显示出来*/}
    /*    return <div>
          {this.state.list.map((val, i) => {
            return <div key={i}>
              <h1>{val.name}</h1>
              <h1>{val.content}</h1>
            </div>
          })}
        </div>*/

    /* 方法三 更麻烦了。。 */
    return <div>
      <p className="comment">评论</p>
      {this.state.list.map((val,i)=>{
        // return <CommentItem name={val.name} content={val.content} key={i}/>
        return <CommentItem {...val} key={i}/>
      })}
    </div>
  }
}