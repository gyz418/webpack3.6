import React from 'react'

export default class Test extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      msg: 'ok',
      color:'red'
    }
  }

  render () {
    return <div>
      <h1>
        父组件 一层一层地props
      </h1>
      <Son color={this.state.color}/>
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
  render () {
    return <div>
      <h5 style={{color:this.props.color}}>
        孙组件
      </h5>
    </div>
  }
}