import React from 'react'

export default class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      routerParams:props.match.params
    }
  }

  render () {
    return <div>
      <h1>Home，{this.props.match.params.type + this.props.match.params.id}</h1>
      <h2>获取路由参数用 this.props.match.params</h2>
      {this.state.routerParams.id}
    </div>
  }
}