import React from 'react'
import propTypes from 'prop-types'
export default class Test extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      msg: 'ok',
      color: 'red'
    }
  }
  // 父组件共享数据
  getChildContext () {
    return {
      color: this.state.color
    }
  }
  // 参数校验
  static childContextTypes={
    color:propTypes.string
  }

  render () {
    return <div>
      <h1>
        父组件 context应用
      </h1>
      <Son/>
    </div>
  }
}

class Son extends React.Component {
  render () {
    return <div>
      <h3>

        子组件
      </h3>
      <Sons color={this.props.color}/>
    </div>
  }
}

class Sons extends React.Component {
  // 先属性校验
  static contextTypes={
    color:propTypes.string // 如果类型跟父组件不一致 propTypes.number，控制台报错
  }
  render () {
    return <div>
      <h5 style={{color: this.context.color}}>
        孙组件
      </h5>
    </div>
  }
}