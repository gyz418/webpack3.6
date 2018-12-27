// 继承React   react的class组件必须继承React.Component
import React from 'react'

/*
//  最简 class 组件

class Test extends React.Component{
  render(){
    return 'a'
  }
}
*/

// 需要导出
// 有状态组件,有 state属性，有生命周期函数
export default class Test extends React.Component {
  constructor (props) {   // props 需要时再传也行
    super(props)
    console.log(props)
    // 组件实例的私有数据对象
    this.state = {      // constructor 里面的 state    // this.state.xxx
      msg: 'i am state'
    }
  }

  render () {
    return <div>
      <p>this is class test, extends React.Component,{this.props.addr}</p>
      <p>{this.state.msg}</p>
    </div>
  }
}